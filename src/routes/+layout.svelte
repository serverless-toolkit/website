<script>
	import '../global.scss';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<main class="container">
	<slot />
</main>
<Footer />
