'use client'
import { PricingTable } from "@clerk/nextjs";
import { dark } from '@clerk/themes'
import { useTheme } from "next-themes"

export default function CustomClerkPricing() {
    const { theme } = useTheme()
    return (
        <section className="bg-muted/50 py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Pricing that Scales with You</h1>
                    <p>Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                </div>
                <PricingTable
                    newSubscriptionRedirectUrl="/success"
                    appearance={{
                        baseTheme: theme === "dark" ? dark : undefined,
                        elements: {
                            pricingTableCardTitle: { // title
                                fontSize: 20,
                                fontWeight: 400,
                            },
                            pricingTableCardDescription: { // description
                                fontSize: 14
                            },
                            pricingTableCardFee: { // price
                                fontSize: 36,
                                fontWeight: 800,  
                            },
                            pricingTableCardFeatures: {
                                backgroundColor: 'var(--color-background)'
                            },
                            pricingTableCardHeader: {
                                backgroundColor: 'var(--color-background)'
                            },
                            pricingTableCardFooter: {
                                backgroundColor: 'var(--color-background)'
                            },
                            pricingTable: {
                                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                            },
                        },
                    }}
                    
                />
            </div>
        </section>
    )
}