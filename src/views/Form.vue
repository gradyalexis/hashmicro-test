<template>
  <v-container width="1024">
    <v-row>
      <v-col cols="12" md="7">
        <v-form @submit.prevent="submitForm">
          <v-card class="pa-6 mb-4" variant="tonal">
            <v-card-title class="mb-4">General Information</v-card-title>
            <v-card-text>
              <div
                class="custom-image-upload"
                @dragover.prevent="handleDragOver"
                @dragleave="handleDragLeave"
                @drop.prevent="handleDrop"
                @click="triggerFileInput"
                :class="{ 'drag-over': isDragOver }"
              >
                <input
                  type="file"
                  ref="fileInput"
                  accept="image/*"
                  style="display: none"
                  @change="handleFileChange"
                />
                <div v-if="!productImage" class="upload-placeholder">
                  <v-icon size="48" color="grey">mdi-image</v-icon>
                  <p class="mt-2">Drag and drop an image or click to upload</p>
                </div>
                <v-img
                  v-else
                  :src="productImageURL"
                  max-height="200"
                  contain
                  class="uploaded-image"
                ></v-img>
              </div>
            </v-card-text>

            <v-card-text>
              <div class="ml-10 font-weight-medium">Name</div>
              <v-text-field
                v-model="productName"
                outlined
                prepend-icon="mdi-tag"
                color="primary"
                placeholder="Enter product name"
                :rules="[v => !!v || 'Product name is required']"
              ></v-text-field>
            </v-card-text>

            <v-card-text>
              <div class="ml-10 font-weight-medium">Description</div>
              <v-textarea
                v-model="description"
                outlined
                prepend-icon="mdi-text-box"
                color="primary"
                rows="3"
                hint="Enter a detailed description of the product"
                persistent-hint
              ></v-textarea>
            </v-card-text>

            <v-card-text>
              <v-row class="mx-1 mt-4 mb-4">
                <v-col class="pa-0">
                  <div class="font-weight-medium">Variant Size</div>
                  <v-btn-toggle v-model="variantSize" mandatory>
                    <v-btn
                      v-for="size in sizes"
                      :key="size"
                      :value="size"
                      class="ma-1"
                      :ripple="false"
                      size="x-small"
                      :color="variantSize === size ? 'grey' : 'white'"
                    >
                      {{ size }}
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
  
                <v-col class="pa-0 ml-10">
                  <div class="font-weight-medium">Gender</div>
                  <v-btn-toggle v-model="gender" mandatory>
                    <v-btn
                      v-for="option in genders"
                      :key="option"
                      :value="option"
                      class="ma-1"
                      :ripple="false"
                      size="x-small"
                      :color="gender === option ? 'grey' : 'white'"
                    >
                      {{ option.label }}
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-text>
              <div class="font-weight-medium">Courier</div>
              <v-btn-toggle v-model="courier" mandatory>
                <v-btn
                  v-for="courierList in couriers"
                  :key="courierList"
                  :value="courierList"
                  class="ma-1"
                  :ripple="false"
                  size="x-small"
                  :color="gender === courierList ? 'grey' : 'white'"
                >
                  {{ courierList }}
                </v-btn>
              </v-btn-toggle>
            </v-card-text>

            <v-card-text>
              <div class="ml-10 font-weight-medium">Origin Delivery</div>
              <v-text-field
                v-model="originDelivery"
                outlined
                prepend-icon="mdi-map-marker"
                color="primary"
                placeholder="Enter origin of delivery"
              ></v-text-field>
            </v-card-text>
          </v-card>

          <v-card class="pa-6" variant="tonal">
            <v-card-title class="mb-4">Payment Information</v-card-title>

            <v-card-text>
              <div class="font-weight-medium">Select Payment</div>
              <v-btn-toggle v-model="paymentMethod" mandatory>
                <v-btn
                  v-for="payment in paymentMethods"
                  :key="payment"
                  :value="payment"
                  class="ma-1"
                  :ripple="false"
                  size="x-small"
                  :color="paymentMethod === payment ? 'grey' : 'white'"
                >
                  {{ payment }}
                </v-btn>
              </v-btn-toggle>
            </v-card-text>

            <v-card-text>
              <div class="ml-10 font-weight-medium">Base Pricing</div>
              <v-text-field
                outlined
                prepend-icon="mdi-currency-usd"
                color="primary"
                placeholder="0.00"
              ></v-text-field>
            </v-card-text>

            <v-card-text>
              <div class="ml-10 font-weight-medium">Stock</div>
              <v-text-field
                outlined
                prepend-icon="mdi-database"
                color="primary"
                placeholder="0"
              ></v-text-field>
            </v-card-text>

            <v-card-text>
              <div class="ml-10 font-weight-medium">Discount</div>
              <v-text-field
                outlined
                prepend-icon="mdi-sale"
                color="primary"
                placeholder="0%"
              ></v-text-field>
            </v-card-text>
          </v-card>

          <v-btn color="red" type="submit" large class="mt-4">Submit</v-btn>
        </v-form>
      </v-col>

      <v-col cols="12" md="5">
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-img
            height="200px"
            :src="productImage ? productImageURL : defaultImage"
            cover
          ></v-img>

          <v-card-title>
            {{ productName || "N/A" }}
          </v-card-title>

          <v-card-subtitle>
            Size/Gender : {{ variantSize || "N/A" }} - {{ gender.label || "N/A" }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="red-lighten-2"
              text="Add to Cart"
            ></v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                {{ description || "N/A" }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';

// Form data
const productImage = ref(null);
const productName = ref('');
const description = ref('');
const variantSize = ref('');
const gender = ref('');
const courier = ref('');
const originDelivery = ref('');
const paymentMethod = ref('');
const show = ref(false);
const defaultImage = ref('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg');

const isDragOver = ref(false);

const couriers = ref(['JNE', 'TIKI', 'POS Indonesia', 'Sicepat', 'Ninja Express']);
const paymentMethods = ref(['Credit Card', 'Bank Transfer', 'PayPal', 'Cash on Delivery']);

const sizes = ref(['XS', 'S', 'M', 'L', 'XL', 'XXL']);

const genders = ref([
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
]);

const productImageURL = computed(() => {
  return productImage.value ? URL.createObjectURL(productImage.value) : '';
});

const handleDragOver = () => {
  isDragOver.value = true;
};

const handleDragLeave = () => {
  isDragOver.value = false;
};

const handleDrop = (event) => {
  isDragOver.value = false;
  const file = event.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    productImage.value = file;
  }
};

const fileInput = ref(null);
const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    productImage.value = file;
  }
};

const submitForm = () => {
  const productData = {
    productImage: productImage.value,
    productName: productName.value,
    description: description.value,
    variantSize: variantSize.value,
    gender: gender.value,
    courier: courier.value,
    originDelivery: originDelivery.value,
    paymentMethod: paymentMethod.value,
  };

  console.log('Product Data:', productData);
  alert('Product submitted successfully!');
  resetForm();
};

const resetForm = () => {
  productImage.value = null;
  productName.value = '';
  description.value = '';
  variantSize.value = '';
  gender.value = '';
  courier.value = '';
  originDelivery.value = '';
  paymentMethod.value = '';
};
</script>

<style scoped>
.custom-image-upload {
  height: 200px;
  width: 200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.custom-image-upload.drag-over {
  border-color: #1976d2;
  background-color: #f5f5f5;
}

.upload-placeholder {
  text-align: center;
  color: #666;
}

.uploaded-image {
  height: 100%;
  width: 100%;
  border-radius: 8px;
}
</style>