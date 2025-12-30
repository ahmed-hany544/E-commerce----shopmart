export interface AddressesResponse {
  status: string;
  data: Address[];  // مصفوفة من العناوين
}

export interface Address {
  _id: string;
  name: string;
  details: string;
  phone: string;
  city: string;
  // أضف حقول أخرى إذا كانت موجودة (مثل postalCode إلخ)
}
