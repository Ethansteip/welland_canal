<script lang="ts">
	import Water from '../lib/components/assets/Water.svelte';
	import Bridge from '../lib/components/assets/Bridge.svelte';
	export let data;
	console.log(data);
</script>

<div class="flex justify-center mt-5">
	<div class="relative">
		<Water className="w-2/3 md:w-[20rem]" />
	</div>
	<Bridge className="absolute rotate-45" />
	<Bridge className="absolute mt-[20rem]" />
</div>
