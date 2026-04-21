function unityShowBanner(msg, type) {
        
    }
    
    var buildUrl = "Build";
    var loaderUrl = buildUrl + "/v8.loader.js";
    var config = {
        dataUrl: buildUrl + "/v8.data",
        frameworkUrl: buildUrl + "/v8.framework.js",
        codeUrl: buildUrl + "/v8.wasm",
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
