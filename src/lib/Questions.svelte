<script lang="ts">
	import { questions, type Questions } from './questions';
	import Question from './ui/Question.svelte';

	let show = $state(false);

	let shuffledQuestions = $state<Questions[]>([]);
	$effect(() => {
		shuffledQuestions = questions
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
		show = true;
	});
</script>

{#if !show}
	<h1 class="text-center">Loading...</h1>
{:else}
	<div class="flex w-screen flex-col flex-wrap items-center gap-5">
		{#each shuffledQuestions as q}
			<Question type={q.type} subtractOnAgree={q.subtractOnAgree}>{q.q}</Question>
		{/each}
	</div>
{/if}
