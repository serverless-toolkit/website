<script>
	import '@picocss/pico/css/pico.css';
	import '../global.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<main class="container">
	<slot />
</main>
<Footer />
