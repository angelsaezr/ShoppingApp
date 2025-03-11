<svelte:head>
  <link rel="manifest" href="/manifest.json" />
  <link rel="icon" type="image/png" href="/favicon.ico" />
</svelte:head>

<script>
  import { onMount } from 'svelte';

  onMount(() => {
    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Registered Service Worker'))
        .catch(err => console.error('Error while register Service Worker', err));
    }
  });
</script>

<slot />

  