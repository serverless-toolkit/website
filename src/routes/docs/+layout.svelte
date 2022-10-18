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
						<li><a href="/docs/building-applications/overview" class="contrast">Overview</a></li>
						<li><a href="/docs/building-applications/blueprints" class="contrast">Blueprints</a></li>
						<li><a href="/docs/building-applications/apps-and-instances" class="contrast">Apps and Instances</a></li>
						<li><a href="/docs/building-applications/parameters" class="contrast">Parameters</a></li>
					</ul>
				</details>
				<details>
					<summary>Dashboard</summary>
					<ul>
						<li><a href="/docs/dashboard/overview" class="contrast">Overview</a></li>
						<li><a href="/docs/dashboard/managing-apps" class="contrast">Managing Apps</a></li>
						<li><a href="/docs/dashboard/managing-instances" class="contrast">Managing Instances</a></li>
						<li><a href="/docs/dashboard/metrics-and-logs" class="contrast">Metrics and Logs</a></li>
						<li><a href="/docs/dashboard/organization-settings" class="contrast">Organization Settings</a></li>
					</ul>
				</details>
				<details>
					<summary>Workflows</summary>
					<ul>
						<li><a href="/docs/workflows/overview" class="contrast">Overview</a></li>
						<li><a href="/docs/workflows/developer-sandbox" class="contrast">Developer Sandbox</a></li>
						<li><a href="/docs/workflows/preview-instances" class="contrast">Preview Instances</a></li>
						<li><a href="/docs/workflows/stages" class="contrast">Stages</a></li>
						<li><a href="/docs/workflows/cloning-instances" class="contrast">Cloning Instances</a></li>
						<li><a href="/docs/workflows/promoting-stages" class="contrast">Promoting Stages</a></li>
						<li><a href="/docs/workflows/automated-testing" class="contrast">Automated Testing</a></li>
						<li><a href="/docs/workflows/ci-cd" class="contrast">CI/CD Integration</a></li>
					</ul>
				</details>
				<details>
					<summary>Domains + SSL (coming soon)</summary>
					<ul>
						<li><a href="/docs/domains/overview" class="contrast">Overview</a></li>
					</ul>
				</details>
				<details>
					<summary>CLI Reference (coming soon)</summary>
					<ul>
						<li><a href="/docs/cli/overview" class="contrast">Overview</a></li>
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
