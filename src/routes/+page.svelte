<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$houdini';

	import Message from '../message.svelte';

	export let data: PageData;

	$: ({ GetRecentMessages } = data);
</script>

<div class="flex-1 overflow-y-scroll no-scrollbar p-6">
	<div class="max-w-4xl mx-auto">
		<div class="flex justify-between items-center">
			{#if $GetRecentMessages.fetching}
				<div class="flex items-center justify-center h-full">
					<p class="text-white">Fetching most recent chat messages.</p>
				</div>
			{:else if $GetRecentMessages.errors}
				<p class="text-white">Something went wrong. Refresh to try again.</p>
			{:else}
				<div class="flex flex-col w-full space-y-3 overflow-y-scroll no-scrollbar">
					{#each $GetRecentMessages.data?.messageCollection?.edges ?? [] as edge}
						<Message message={edge?.node} />
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
<div class="p-6 bg-white/5 border-t border-[#363739]">
	<div class="max-w-4xl mx-auto">
		<form method="POST" action="?/add" use:enhance class="flex items-center space-x-3">
			<input
				id="body"
				name="body"
				placeholder="Write a message..."
				class="flex-1 h-12 px-3 rounded bg-[#222226] border border-[#222226] focus:border-[#222226] focus:outline-none text-white placeholder-white"
			/>
			<button
				type="submit"
				class="bg-[#222226] rounded h-12 font-medium text-white w-24 text-lg border border-transparent hover:bg-[#363739] transition"
			>
				Send
			</button>
		</form>
	</div>
</div>
