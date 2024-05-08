<template>
    <div class="subscribe-package flex justify-center p-2">
        <div class="w-[450px] rounded-lg p-3 bg-slate-100 space-y-3">
            <div class="movie-trailer border h-[200px] w-full object-contain overflow-hidden">
                <NuxtImg src="https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/79e519c5-47e0-4a29-916b-c2032f225ad7/fdc1fe99-82c1-4987-8127-dc1bd19bbbe5.jpg"/>
            </div>
            <div>
                <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
                    <template #default="{ item, index, open }">
                    <UButton color="violet" variant="solid" class="border-b border-gray-200 dark:border-gray-700" :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
                        <span class="truncate text-lg">{{ item.label }}</span>

                        <template #trailing>
                        <UIcon
                            name="i-heroicons-chevron-right-20-solid"
                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                            :class="[open && 'rotate-90']"
                        />
                        </template>
                    </UButton>
                    </template>



                    <template #[item.slot] v-for="item in items">
                        <div class="text-gray-900 dark:text-white space-y-2 text-center py-2 px-4">
                            <div class="description p-4 bg-violet-100 tex-black">
                                <div class="description-item flex space-x-2 items-center">
                                    <UIcon name="i-heroicons-square-2-stack"/>
                                    <span class="captalize">No ads</span>
                                </div>
                                <div class="description-item flex space-x-2 items-center">
                                    <UIcon name="i-heroicons-square-2-stack"/>
                                    <span class="captalize">Excusive Video Content</span>
                                </div>
                                <div class="description-item flex space-x-2 items-center">
                                    <UIcon name="i-heroicons-square-2-stack"/>
                                    <span class="captalize">Unlimited Download</span>
                                </div>
                            </div>
                            <div class="text-left space-y-2">
                                <p>Select Payment Method (including VAT, SD & SC)</p>

                                <div v-for="option in options">
                                    <label :for="option.label" class="flex space-x-2">
                                        <input name="payment" :value="options.value" :id="option.label" type="radio">
                                        <p class="flex space-x-1 mt-2 items-center">
                                            <NuxtImg v-show="option?.image" class="h-[24px] w-[24px]" :src="option.image"/>
                                            <UIcon v-show="option?.icon" :name="option.icon" class="h-[24px] w-[24px]"/>
                                            <p>{{ option.label }}</p>
                                        </p>
                                    </label>
                                </div>
                            </div>
                            
                        </div>
                    </template>
                </UAccordion>
            </div>
        </div>
    </div>
</template>
<script setup>

const options = [
  { value: 'bkash', label: 'Bkash', image: 'https://seeklogo.com/images/B/bkash-logo-0C1572FBB4-seeklogo.com.png' },
  { value: 'nagad', label: 'Nagad', image: 'https://limda.net/img/nagad.png' },
  { value: 'mobile', label: 'Mobile', icon: 'i-heroicons-device-phone-mobile' },
  { value: 'card', label: 'Card', icon: 'i-heroicons-credit-card' }
]

const selected = ref('sms')

    const items = [{
        label: 'Bongo Monthly Subscription',
        icon: 'i-heroicons-information-circle',
        defaultOpen: true,
        slot: 'monthly',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
        }, {
        label: 'Bongo Half Year Subscription',
        icon: 'i-heroicons-arrow-down-tray',
        slot: 'half-year',
        description: 'bolesile',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
        },{
        label: 'Bongo Full Year Subscription',
        icon: 'i-heroicons-wrench-screwdriver',
        slot: 'full-year',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
    }]
</script>