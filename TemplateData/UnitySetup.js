function unityShowBanner(msg, type) {
        
    }
    
    var buildUrl = "Build";
    var loaderUrl = buildUrl + "/v27.loader.js";
    var config = {
        dataUrl: buildUrl + "/v27.data",
        frameworkUrl: buildUrl + "/v27.framework.js",
        codeUrl: buildUrl + "/v27.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "MiniGames",
        productVersion: "0.1",
        showBanner: unityShowBanner,
    };

    createUnityInstance(canvas, config, (progress) => {
    })
        .then((unityInstance) => {
            gameInstance = unityInstance;
        })
        .catch((message) => {
            alert(message);
        });
