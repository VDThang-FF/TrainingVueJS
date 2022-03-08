<template>
    <div class="bg-white w-full p-4 vdt-border-1 lg:w-3">
        <p class="text-center text-primary font-bold text-xl mb-6">TRANSACTION DAILY</p>
        <form class="p-fluid">
            <div class="p-float-label mb-5">
                <InputText class="w-full" id="username" type="text" />
                <label for="username">Tên đăng nhập</label>
            </div>
            <div class="p-float-label mb-5">
                <Password id="password" class="w-full vdt-password" toggleMask :feedback="false" />
                <label for="password">Mật khẩu</label>
            </div>
            <Button class="w-full mb-5" label="Đăng nhập" type="submit" :loading="loading" />
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useToast } from "primevue/usetoast";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';

const loading = ref(false);

</script>

<style lang="scss">
.vdt-password {
    .p-inputtext {
        width: 100%;
    }
}
</style>
