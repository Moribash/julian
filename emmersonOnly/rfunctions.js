const noblox = require('noblox.js')

const testTrade = {
    sendTrade1: async function() {
        try{
            await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_995E2AC134DD92159AC641B0A4DE9746DFC1BB4885176C9AEC8208B411D60C78293CF94A6E67B7D17D5CD820A18868B9DF9ADBD813D3DC8BF9F283B51DD9D93F3424E542259D7E132AB804E917EFAF901FD75F21FDF469F54EA328FFD5E8D178D1A280525DA3AAACEA15FC523813642646706D68FBD91DA7F0E16E5AB578851D4E7E5405E7C9503D94910C22ACE4476125E5A4C31AF857E1A7D1BC1D2DC057D2D52F77EFB8218128D352AF90B939BCD98749CF79FA485BD5332CBBB20B61AAF4C9A706FA0F95EC0DE7836AB73011ADFA388224243EFE2A97A14A3AD677021D363AB11D9EA6050D70363C23EDD8EF7627D3DB748BC18E975AE4CF54D5EA85A17EA16952DD3BE6EA203A4DF40D0C341C62FA26592A7D0FA344E188593D5B2BB8758EF256E98FD51FFC8F40013A0BB72EF668E807FB183D1B33445A6A417294E6834BF4B978B06DACDD2BC34490B2701EC16361D548').then(async function() {
                try{
                await noblox.sendTrade(1401041377, {userAssetIds: [113039771619]}, {userAssetIds: [113777768183]})
                console.log('sent trade!')
                } catch(err) {
                      console.log('couldnt send trade')
                      console.log(err)
                }
             })
        }
        catch(err){
            console.print('couldnt log in, ' + err)
        }
    },

    sendTrade2: async function() {
        try{
            await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_995E2AC134DD92159AC641B0A4DE9746DFC1BB4885176C9AEC8208B411D60C78293CF94A6E67B7D17D5CD820A18868B9DF9ADBD813D3DC8BF9F283B51DD9D93F3424E542259D7E132AB804E917EFAF901FD75F21FDF469F54EA328FFD5E8D178D1A280525DA3AAACEA15FC523813642646706D68FBD91DA7F0E16E5AB578851D4E7E5405E7C9503D94910C22ACE4476125E5A4C31AF857E1A7D1BC1D2DC057D2D52F77EFB8218128D352AF90B939BCD98749CF79FA485BD5332CBBB20B61AAF4C9A706FA0F95EC0DE7836AB73011ADFA388224243EFE2A97A14A3AD677021D363AB11D9EA6050D70363C23EDD8EF7627D3DB748BC18E975AE4CF54D5EA85A17EA16952DD3BE6EA203A4DF40D0C341C62FA26592A7D0FA344E188593D5B2BB8758EF256E98FD51FFC8F40013A0BB72EF668E807FB183D1B33445A6A417294E6834BF4B978B06DACDD2BC34490B2701EC16361D548').then(async function() {
                try{
                await noblox.sendTrade(1401041377, {userAssetIds: [113039771619]}, {userAssetIds: [113777768183]})
                console.log('sent trade!')
                } catch(err) {
                      console.log('couldnt send trade')
                      console.log(err)
                }
             })
        }
        catch(err){
            console.print('couldnt log in, ' + err)
        }
    },

    changeUser: async function() {
        await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_995E2AC134DD92159AC641B0A4DE9746DFC1BB4885176C9AEC8208B411D60C78293CF94A6E67B7D17D5CD820A18868B9DF9ADBD813D3DC8BF9F283B51DD9D93F3424E542259D7E132AB804E917EFAF901FD75F21FDF469F54EA328FFD5E8D178D1A280525DA3AAACEA15FC523813642646706D68FBD91DA7F0E16E5AB578851D4E7E5405E7C9503D94910C22ACE4476125E5A4C31AF857E1A7D1BC1D2DC057D2D52F77EFB8218128D352AF90B939BCD98749CF79FA485BD5332CBBB20B61AAF4C9A706FA0F95EC0DE7836AB73011ADFA388224243EFE2A97A14A3AD677021D363AB11D9EA6050D70363C23EDD8EF7627D3DB748BC18E975AE4CF54D5EA85A17EA16952DD3BE6EA203A4DF40D0C341C62FA26592A7D0FA344E188593D5B2BB8758EF256E98FD51FFC8F40013A0BB72EF668E807FB183D1B33445A6A417294E6834BF4B978B06DACDD2BC34490B2701EC16361D548')
    }
}

module.exports = testTrade