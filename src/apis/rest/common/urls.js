const BACKEND_URLS = [
    import.meta.env.VITE_BACKEND_URL1,
    import.meta.env.VITE_BACKEND_URL2,
    import.meta.env.VITE_BACKEND_URL3,
];

if (import.meta.env.DEV) {
    BACKEND_URLS.unshift(import.meta.env.VITE_BACKEND_URL0)
    console.log(BACKEND_URLS)
}

export { BACKEND_URLS };