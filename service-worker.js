self.addEventListener("install",event =>{
    console.log("Service worker instalado")
});

self.addEventListener("activate",event =>{
    console.log("service Worker ativado")
});

self.addEventListener("fetch",event =>{
});