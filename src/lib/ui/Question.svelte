<script lang="ts">
	import type { PoliticalTestType } from '$lib/stores.svelte';
	import { getContext } from 'svelte';

	interface PoliticalQuestion {
		type: 'liberty' | 'democracy';
		subtractOnAgree?: boolean;
		children?: any;
	}

	const { type, subtractOnAgree, children }: PoliticalQuestion = $props();
	let selected = $state<null | string>(null);

	const politicalTest = getContext<PoliticalTestType>('politicalTest');

	function onSelect(
		value: number,
		el: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	) {
		if (subtractOnAgree) {
			value = value * -1;
		}

		let adder, subtract;

		if (type == 'liberty') {
			adder = politicalTest.addLib;
			subtract = politicalTest.rmLib;
		} else {
			adder = politicalTest.addDemo;
			subtract = politicalTest.rmDemo;
		}

		if (!!selected) {
			let valueToBeRemoved: number = 0;
			switch (selected) {
				// strongly agree
				case 'sa':
					valueToBeRemoved = 1;
					break;
				// agree
				case 'a':
					valueToBeRemoved = 0.5;
					break;
				// neutral
				case 'n':
					break;
				// disagree
				case 'd':
					valueToBeRemoved = -0.5;
					break;
				// strongly disagree
				case 'sd':
					valueToBeRemoved = -1;
			}
			if (subtractOnAgree) {
				valueToBeRemoved = valueToBeRemoved * -1;
			}

			subtract(valueToBeRemoved);
		} else {
			politicalTest.questionsDone();
		}
		adder(value);

		selected = el.currentTarget.name;
	}
</script>

<div class="flex w-screen flex-col items-center gap-7 rounded-3xl bg-base-200 p-10 lg:w-[90vw]">
	<div class=" text-3xl md:text-center">{@render children?.()}</div>
	<div class="flex flex-col md:join md:flex-row">
		<button
			class="btn md:join-item hover:bg-green-600 hover:text-black {selected == 'sa'
				? 'bg-green-600/40'
				: ''}"
			name="sa"
			onclick={(el) => onSelect(1, el)}
		>
			Strongly agree
		</button>
		<button
			class="btn md:join-item hover:bg-green-300 hover:text-black {selected == 'a'
				? 'bg-green-300/40'
				: ''}"
			name="a"
			onclick={(el) => onSelect(0.5, el)}
		>
			Agree
		</button>
		<button
			class="btn md:join-item hover:bg-gray-100 hover:text-black {selected == 'n'
				? 'bg-gray-100/40'
				: ''}"
			name="n"
			onclick={(el) => onSelect(0, el)}
		>
			Neutral
		</button>
		<button
			class="btn md:join-item hover:bg-red-300 hover:text-black {selected == 'd'
				? 'bg-red-300/40'
				: ''}"
			name="d"
			onclick={(el) => onSelect(-0.5, el)}
		>
			Disagree
		</button>
		<button
			class="btn md:join-item hover:bg-red-600 {selected == 'sd' ? 'bg-red-600/40' : ''}"
			name="sd"
			onclick={(el) => onSelect(-1, el)}
		>
			Strongly disagree
		</button>
	</div>
</div>
