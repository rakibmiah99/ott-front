<template>
    <div class="px-12 py-2 flex items-center flex-col flex-wrap mb-10">
       <div>
            <div class="py-6 text-3xl font-bold uppercase">Subscribe</div>
            <div class="flex flex-wrap">
                <div class="package-box p-6 rounded-lg space-y-4 shadow-xl bg-violet-100 text-white">
                    <USelect color="violet" v-model="package_model" :options="packages" option-attribute="name" />
                    <h2 class="text-2xl text-violet-500 font-bold"> BDT {{ package_info?.price }} / {{ package_info?.type }} </h2>

                    <ul class="max-w-md space-y-1 text-gray-700 list-inside dark:text-gray-400">
                        <li class="flex items-center" v-for="item in package_info?.description">
                            <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <div class="px-12 ml-8">
                    <div class="space-y-3">
                        <div class="flex space-x-4">
                            <UInput color="violet" size="xl" variant="outline" placeholder="Add Promo Code" />
                            <UButton color="violet" size="xl" class="px-6">Apply Code</UButton>
                        </div>
                        <p class="text-sm">Offer code will not be applicable for Paypal.</p>
                        <div class="payment-process space-y-4 mt-5">
                            <div class="space-y-3">
                                <label>Bkash</label>
                                <label class="input flex flex-wrap space-x-2" for="bkash">
                                    <input name="payment" type="radio" id="bkash">
                                    <img src="https://seeklogo.com/images/B/bkash-logo-376D8E5FFA-seeklogo.com.png" class="h-[60px] block">
                                </label>
                            </div>
                            <div class="space-y-3">
                                <label>Cards/Mobile banking</label>
                                <label class="input flex flex-wrap space-x-2" for="ssl">
                                    <input name="payment" type="radio" id="ssl">
                                    <img src="https://appcmsprod.viewlift.com/build/337/static/media/bangladesh-cards.ffbdef9f.jpg" class="h-[50px] block">
                                </label>
                            </div>

                            <UButton size="xl" color="violet" class="px-6 font-bold" block>Checkout</UButton>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>

<script setup lang="ts">
const {bodyLoaderStore} = useUtility();
const packages = ref([])

var package_info = ref(null);
var package_model = ref("")


watch(package_model, async (active, old) => {
    await getData(active);
} )



onMounted(async () => {
    await getData();
})

async function getData(value = null) {
    bodyLoaderStore.value = true;
    const url = value ? '/package/'+value : '/package';
    const response = await callApi(url);
    bodyLoaderStore.value = false;
    const data = response.data;
    if(!value){
        packages.value = data.packages;
        package_model.value = data.data.value;
        package_info.value = data.data;
    }
    else{

        package_info.value = data;
    }
   
    
   
    console.log(data)
}
</script>