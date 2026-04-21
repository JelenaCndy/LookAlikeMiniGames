function unityShowBanner(msg, type) {
        
    }
    
    var buildUrl = "Build";
    var loaderUrl = buildUrl + "/v11.loader.js";
    var config = {
        dataUrl: buildUrl + "/v11.data",
        frameworkUrl: buildUrl + "/v11.framework.js",
        codeUrl: buildUrl + "/v11.wasm",
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
