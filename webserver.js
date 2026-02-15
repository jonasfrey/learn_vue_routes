let f_s_content_type = function(s_path) {
    if (s_path.endsWith('.html')) return 'text/html';
    if (s_path.endsWith('.js')) return 'application/javascript';
    if (s_path.endsWith('.css')) return 'text/css';
    if (s_path.endsWith('.json')) return 'application/json';
    return 'application/octet-stream';
};

let s_ds = Deno.build.os === "windows" ? "\\" : "/";
Deno.serve(
  { hostname: "localhost", port: 8080 },
  async (request) => {
    const url = new URL(request.url);
    const filepath = decodeURIComponent(url.pathname);
    let s_path = filepath;
        // serve static file
    if (s_path === '/') {
        s_path = '/index.html';
    }

    try {
        let s_path_file = `./webserved_dir${s_path}`.replace(/\//g, s_ds);
        console.log(s_path_file)

        let a_n_byte = await Deno.readFile(s_path_file);
        let s_content_type = f_s_content_type(s_path);
        return new Response(a_n_byte, {
            headers: { 'content-type': s_content_type },
        });
    } catch {
        console.error(`File not found: ${s_path}`);
        return new Response('Not Found', { status: 404 });
    }
  },
);