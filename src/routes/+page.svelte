<script>
	import Questions from '$lib/Questions.svelte';
	import { createPoliticalTest } from '$lib/stores.svelte';
	import PoliticalCompass from '$lib/ui/PoliticalCompass.svelte';
	import { setContext } from 'svelte';

	const politicaltest = createPoliticalTest();

	setContext('politicalTest', politicaltest);

	let showPoliticalCompass = $state(false);

	function result() {
		return `Liberty: ${politicaltest.lib} | Democracy: ${politicaltest.demo}`;
	}
</script>

<div class="p-10">
	<h1 class=" p-5 text-center text-lg font-bold md:text-3xl">
		{!showPoliticalCompass ? 'Welcome to the political test!' : "Here's your result!"}
	</h1>
	<p class=" p-2 text-center md:text-xl">
		{!showPoliticalCompass
			? 'Like political compass test but better because we removed "left-right" non-sense'
			: result()}
	</p>
</div>

{#if showPoliticalCompass}
	<PoliticalCompass></PoliticalCompass>
{:else}
	<Questions />
{/if}
<div class=" mb-5 mt-10 flex items-center justify-center">
	<button
		class="btn {politicaltest.readyToShow ? 'btn-primary' : 'btn-disabled'}"
		onclick={() => {
			if (!politicaltest.readyToShow) return;
			showPoliticalCompass = !showPoliticalCompass;

			if (!showPoliticalCompass) {
				politicaltest.setReady(false);
			}
		}}>{!showPoliticalCompass ? 'Let me show my result' : 'Go back to questions'}</button
	>
</div>
