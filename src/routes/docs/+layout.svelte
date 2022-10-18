<div class="row">
	<div class="col-3">
		<aside>
			<nav>
				<details open>
					<summary>Get started</summary>
					<ul>
						<li><a href="/docs/get-started/quick-start" class="contrast">Quick start</a></li>
						<li><a href="/docs/get-started/concepts" class="contrast">Concepts</a></li>
					</ul>
				</details>
				<details open>
					<summary>Building Applications</summary>
					<ul>
						<li><a href="/" class="contrast">Overview</a></li>
						<li><a href="/" class="contrast">Blueprints</a></li>
						<li><a href="/" class="contrast">Apps and Instances</a></li>
						<li><a href="/" class="contrast">Parameters</a></li>
					</ul>
				</details>
				<details>
					<summary>Web Dashboard</summary>
					<ul>
						<li><a href="/" class="contrast">Overview</a></li>
						<li><a href="/" class="contrast">Managing Apps</a></li>
						<li><a href="/" class="contrast">Managing Instances</a></li>
						<li><a href="/" class="contrast">Metrics and Logs</a></li>
						<li><a href="/" class="contrast">Organization Settings</a></li>
					</ul>
				</details>
				<details>
					<summary>Workflows</summary>
					<ul>
						<li><a href="/" class="contrast">Overview</a></li>
						<li><a href="/" class="contrast">Developer Sandbox</a></li>
						<li><a href="/" class="contrast">Preview Instances</a></li>
						<li><a href="/" class="contrast">Stages</a></li>
						<li><a href="/" class="contrast">Cloning Instances</a></li>
						<li><a href="/" class="contrast">Promoting Stanges</a></li>
						<li><a href="/" class="contrast">Automated Testing</a></li>
						<li><a href="/" class="contrast">CI/CD</a></li>
					</ul>
				</details>
				<details>
					<summary>Domains + SSL (coming soon)</summary>
					<ul>
						<li><a href="/" class="contrast">Overview</a></li>
					</ul>
				</details>
				<details>
					<summary>CLI Reference (coming soon)</summary>
					<ul>
						<li><a href="/" class="contrast">Overview</a></li>
					</ul>
				</details>
			</nav>
		</aside>
	</div>
	<div class="col-9 document">
		<slot />
	</div>
</div>

<style>
	.document {
		padding-left: 2rem;
	}
</style>
