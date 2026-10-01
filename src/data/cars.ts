export interface CarType {
  id: string;
  name: string;
  imageUrl: string;
}

export const CARS: CarType[] = [
  { id: 'veloz', name: 'Toyota Veloz', imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790853376/fe36ee22-9ee0-41b4-bfdc-8f4d8bb22ebc.png' },
  { id: 'innova', name: 'Innova Reborn', imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790853160/5e046e90-953a-4bbe-801e-699c0465f851.png' },
  { id: 'zenix', name: 'Toyota Zenix', imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790853278/cb32af20-5218-49d3-bc57-98bc6a43b540.png' },
  { id: 'alphard', name: 'Toyota Alphard', imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790853221/d0bb1a1e-d9ea-46cc-939d-52ada6aacaf1.png' },
  { id: 'hiace', name: 'Toyota Hiace', imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790853248/371cc816-ee3f-4a0f-8e4e-d0e70553ad36.png' },
  { id: 'bus', name: 'Bus', imageUrl: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790853310/0468df41-3ac9-430a-ad1d-f0aaaddb1b64.png' }
];
