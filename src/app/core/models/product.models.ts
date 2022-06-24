export interface Category{
    id: number;
    name: string;
    description: string;
    image: string;
}

export interface Categories{
    categories: Category[];
}