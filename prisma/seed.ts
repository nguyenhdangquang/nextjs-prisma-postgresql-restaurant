import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const categoriesEntity = [
    {
        name: "YAKITORI",
        restaurants: [
            {
                rating: "4.2",
                rating_count: 139,
                city: "osaka",
                desc: "최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는",
                imageId: [
                    "pexels-ash-craig-122861-376464",
                    "pexels-chevanon-323682",
                    "pexels-dana-tentis-118658-262959"
                ],
                name: "카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야",
                price_range: "3~5",
                featured: "나카노시마×야키토리 상위 맛집",
                isFavorite: true
            },
            {
                rating: "4.1",
                rating_count: 160,
                city: "osaka",
                desc: "맛있고 저렴한 야키토리 전문점",
                imageId: [
                    "pexels-robinstickel-70497"
                ],
                name: "야키토리 하치베",
                price_range: "1~3",
                featured: "오사카 야키토리 숨은 맛집",
                isFavorite: false
            },
            {
                rating: "4.1",
                rating_count: 160,
                city: "osaka",
                desc: "맛있고 저렴한 야키토리 전문점",
                imageId: [
                    "pexels-robinstickel-70497"
                ],
                name: "야키토리 하치베",
                price_range: "1~3",
                featured: "오사카 야키토리 숨은 맛집",
                isFavorite: false
            }
        ]
    },
    {
        name: "SUSHI",
        restaurants: [
            {
                rating: "4.5",
                rating_count: 200,
                city: "tokyo",
                desc: "신선한 해산물과 정통 스시를 제공하는",
                imageId: [
                    "pexels-rajesh-tp-749235-1633525"
                ],
                name: "스시 긴자 이시카와",
                price_range: "4~6",
                featured: "도쿄의 상위 스시 맛집",
                isFavorite: false
            },
            {
                rating: "4.8",
                rating_count: 250,
                city: "sapporo",
                desc: "신선한 해산물로 만든 정통 스시를 즐길 수 있는",
                imageId: [
                    "pexels-ella-olsson-572949-1640777",
                ],
                name: "스시 사토",
                price_range: "4~6",
                featured: "삿포로 스시 맛집",
                isFavorite: true
            }
        ]
    },
    {
        name: "RAMEN",
        restaurants: [
            {
                rating: "4.7",
                rating_count: 180,
                city: "kyoto",
                desc: "진한 국물과 다양한 토핑을 자랑하는",
                imageId: [
                    "pexels-ella-olsson-572949-1640777",
                ],
                name: "라멘 이치란",
                price_range: "2~4",
                featured: "교토의 라멘 명소",
                isFavorite: true
            },
            {
                rating: "4.4",
                rating_count: 170,
                city: "hiroshima",
                desc: "깊은 맛의 국물과 탱탱한 면발을 자랑하는",
                imageId: [
                    "pexels-rajesh-tp-749235-1633525",
                ],
                name: "라멘 타츠야",
                price_range: "2~4",
                featured: "히로시마 라멘 추천",
                isFavorite: false
            }
        ]
    },
    {
        name: "TEMPURA",
        restaurants: [
            {
                rating: "4.3",
                rating_count: 220,
                city: "nagoya",
                desc: "바삭한 텐푸라를 맛볼 수 있는",
                imageId: [
                    "pexels-dana-tentis-118658-262959",
                    "pexels-chevanon-323682",
                    "pexels-julieaagaard-2097090"
                ],
                name: "텐푸라 마츠야",
                price_range: "3~5",
                featured: "나고야 최고의 텐푸라집",
                isFavorite: false
            },
            {
                rating: "4.4",
                rating_count: 170,
                city: "hiroshima",
                desc: "깊은 맛의 국물과 탱탱한 면발을 자랑하는",
                imageId: [
                    "pexels-rajesh-tp-749235-1633525",
                ],
                name: "라멘 타츠야",
                price_range: "2~4",
                featured: "히로시마 라멘 추천",
                isFavorite: false
            },
            {
                rating: "4.9",
                rating_count: 300,
                city: "yokohama",
                desc: "고급스러운 텐푸라를 제공하는",
                imageId: [
                    "pexels-chevanon-323682",
                ],
                name: "텐푸라 야마구치",
                price_range: "5~7",
                featured: "요코하마 텐푸라 추천",
                isFavorite: true
            },
        ]
    },
    {
        name: "SOBA",
        restaurants: [
            {
                rating: "4.6",
                rating_count: 190,
                city: "fukuoka",
                desc: "쫄깃한 면발과 진한 육수를 자랑하는",
                imageId: [
                    "pexels-ash-craig-122861-376464",
                ],
                name: "우동 타로",
                price_range: "2~4",
                featured: "후쿠오카 우동 맛집",
                isFavorite: true
            },
            {
                rating: "4.0",
                rating_count: 150,
                city: "kobe",
                desc: "담백한 국물과 쫄깃한 면발이 일품인",
                imageId: [
                    "pexels-valeriya-1251198",
                ],
                name: "우동 가게야마",
                price_range: "2~4",
                featured: "고베 우동 맛집",
                isFavorite: false
            },
        ]
    },
    {
        name: "UNAGI",
        restaurants: []
    },
    {
        name: "TONKATSU",
        restaurants: []
    },
    {
        name: "SUKIYAKI",
        restaurants: []
    },
    {
        name: "YAKISOBA",
        restaurants: []
    },
    {
        name: "OKONOMIYAKI",
        restaurants: []
    },
    {
        name: "DONBURI",
        restaurants: []
    },
    {
        name: "ODEN",
        restaurants: []
    },
    {
        name: "KAISEKI",
        restaurants: []
    },
    {
        name: "HAMBAGU",
        restaurants: []
    },
    {
        name: "TEPPANYAKI",
        restaurants: []
    },
    {
        name: "CURRY",
        restaurants: []
    },
    {
        name: "YAKINIKU",
        restaurants: []
    },
    {
        name: "NABE",
        restaurants: []
    },
    {
        name: "CAFE",
        restaurants: []
    },
    {
        name: "IZAKAYA",
        restaurants: []
    },
    {
        name: "OTHER",
        restaurants: []
    },
]

async function main() {
    await prisma.$transaction(async (tx) => {
        for (const category of categoriesEntity) {
            await tx.category.create({
                data: {
                    name: category.name,
                    restaurants: {
                        create: [...category.restaurants]
                    }
                },
            })
        }
    })
    console.log('Database seeded successfully!')
}

main()
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => await prisma.$disconnect())
