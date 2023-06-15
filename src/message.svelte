<script lang="ts">
	import { formatRelative, formatDistance, differenceInHours } from 'date-fns';
	import { page } from '$app/stores';

	type Message = {
		id: string;
		username: string;
		avatar?: string;
		body: string;
		createdAt: Date;
	};

	export let message: Message | undefined;
</script>

{#if message}
	<div
		class={`flex flex-col relative space-x-1 space-y-1 ${
			message.username === $page.data.session?.user?.username ? 'text-right' : 'text-left'
		}`}
	>
		<div
			class={`flex relative space-x-1 ${
				message.username === $page.data.session?.user?.username
					? 'flex-row-reverse space-x-reverse'
					: 'flex-row'
			}`}
		>
			{#if message?.avatar}
				<div class="w-12 h-12 overflow-hidden flex-shrink-0 rounded">
					<a
						href={`https://github.com/${message.username}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							width={50}
							height={50}
							src={message.avatar}
							alt={message.username}
							title={message.username}
						/>
					</a>
				</div>
			{/if}
			<span
				class={`inline-flex rounded space-x-2 items-start p-3 text-white ${
					message.username === $page.data.session?.user?.username ? 'bg-[#4a9c6d]' : 'bg-[#363739]'
				} `}
			>
				{#if message.username !== $page.data.session?.user?.username}
					<span class="font-bold">{message.username}:&nbsp;</span>
				{/if}
				<span class="max-w-sm">{message.body}</span>
			</span>
		</div>
		<p class="text-xs text-white/50">
			{differenceInHours(new Date(), new Date(message.createdAt)) >= 1
				? formatRelative(new Date(message.createdAt), new Date())
				: formatDistance(new Date(message.createdAt), new Date(), {
						addSuffix: true
				  })}
		</p>
	</div>
{/if}
