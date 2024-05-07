import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        offerings: [
            {
                id: 1,
                name: "Oxalis",
                city: "San Francisco",
                description: "A recognized leader in language immersion & early education, opening second school.",
                totalAmount: 1000000,
                raisedAmount: 574926,
                barAmount: 65
            }, {
                id: 2,
                name: "Oxalis",
                city: "San Francisco",
                description: "A recognized leader in language immersion & early education, opening second school.",
                totalAmount: 1000000,
                raisedAmount: 574926,
                barAmount: 65
            }, {
                id: 3,
                name: "Oxalis",
                city: "San Francisco",
                description: "A recognized leader in language immersion & early education, opening second school.",
                totalAmount: 1000000,
                raisedAmount: 574926,
                barAmount: 65
            }, {
                id: 4,
                name: "Oxalis",
                city: "San Francisco",
                description: "A recognized leader in language immersion & early education, opening second school.",
                totalAmount: 1000000,
                raisedAmount: 574926,
                barAmount: 65
            }, {
                id: 5,
                name: "Oxalis",
                city: "Brooklyn, NY",
                description: "A recognized leader in language immersion & early education, opening second school.",
                totalAmount: 1000000,
                raisedAmount: 574926,
                barAmount: 65
            }, {
                id: 6,
                name: "Oxalis",
                city: "San Francisco",
                description: "A recognized leader in language immersion & early education, opening second school.",
                totalAmount: 1000000,
                raisedAmount: 574926,
                barAmount: 65
            }, {
                id: 7,
                name: "Oxalis",
                city: "San Francisco",
                description: "A recognized leader in language immersion & early education, opening second school.",
                totalAmount: 1000000,
                raisedAmount: 574926,
                barAmount: 65
            }, {
                id: 8,
                name: "Oxalis",
                city: "San Francisco",
                description: "A recognized leader in language immersion & early education, opening second school.",
                totalAmount: 1000000,
                raisedAmount: 574926,
                barAmount: 65
            }
        ]
    });
}

