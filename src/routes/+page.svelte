<script lang="ts">
	import { Bookmark, SkipBack, SkipForward, Pause, Repeat, Shuffle, Volume2 } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let duration: number = 0;

	onMount(() => {
		const interval = setInterval(() => {
			if (duration > 29) {
				duration = 0;
			} else {
				duration += 1;
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<main class="flex min-h-svh items-center justify-center py-20">
	<div class="max-w-[700px] overflow-hidden rounded-lg shadow-xl">
		<div class="flex gap-6 bg-[#1b1b1b] p-12 text-white opacity-90">
			<img
				src="/Meghan_Trainor_-_Better_When_I'm_Dancin'.png"
				alt="meghan-trainor"
				class="aspect-square h-[220px] rounded object-cover"
			/>

			<div class="grow">
				<span class="mb-1 inline-block text-base font-semibold opacity-40"
					>Meghan Trainor &bull; The Peanuts Movie (2015)</span
				>
				<h1 class="text-3xl font-semibold">Better When I'm Dancin'</h1>

				<div class="my-6">
					<input type="range" class="h-1 w-full accent-[#71C6FF]" bind:value={duration} min="0" max="29" />
					<div class="flex items-center justify-between">
						<p>0:18</p>
						<p>0:29</p>
					</div>
				</div>
				<div class="grid grid-cols-6 place-items-center gap-5">
					<button class="justify-self-start transition hover:opacity-70">
						<Bookmark />
					</button>
					<div class="col-span-4 flex items-center gap-5">
						<button class="transition hover:opacity-70">
							<Shuffle />
						</button>
						<button class="transition hover:opacity-70">
							<SkipBack />
						</button>
						<button class="rounded-full bg-white p-4 text-black transition hover:opacity-70">
							<Pause class="fill-black" />
						</button>
						<button class="transition hover:opacity-70">
							<SkipForward />
						</button>
						<button class="transition hover:opacity-70">
							<Repeat />
						</button>
					</div>
					<button class="justify-self-end transition hover:opacity-70">
						<Volume2 />
					</button>
				</div>
			</div>
		</div>

		<div class="bg-[#181818] p-12 text-white opacity-90">
			<h2 class="mb-7 text-lg uppercase tracking-wider opacity-40">Playlist</h2>
			<ul class="space-y-10">
				{#each { length: 4 } as _}
					<li class="flex items-center gap-5">
						<img
							src="/Meghan_Trainor_-_Better_When_I'm_Dancin'.png"
							alt="meghan-trainor"
							class="h-14 w-14 rounded-md"
						/>
						<div>
							<h3 class="text-base">Better When I'm Dancin'</h3>
							<p class="text-sm opacity-40">Meghan Trainor</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</main>
