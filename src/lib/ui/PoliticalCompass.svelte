<script lang="ts">
	import { type PoliticalTestType } from '$lib/stores.svelte';
	import { getContext } from 'svelte';
	import { Canvas, Layer } from 'svelte-canvas';

	const politicalTest = getContext<PoliticalTestType>('politicalTest');

	const renderSvg = ({ context }: { context: CanvasRenderingContext2D }) => {
		context.fillStyle = 'white';
		context.fillRect(0, 0, 320, 320);
		const img = new Image(320, 320);
		img.src = 'politicaltest.svg';
		img.onload = () => {
			context.drawImage(img, 0, 0);

			const lib = 320 / 2 + politicalTest.lib * 8;
			const demo = 320 / 2 + politicalTest.demo * 8;
			context.beginPath();
			context.arc(lib, demo, 8, 0, 2 * Math.PI);
			context.closePath();
			context.fillStyle = 'red';
			context.fill();
		};
	};
</script>

<div class="flex w-screen flex-col items-center">
	<Canvas width={320} height={320}>
		<Layer render={renderSvg} />
	</Canvas>
</div>
