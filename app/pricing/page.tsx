import type { Metadata } from 'next';

export const metadata : Metadata = {
  title: 'Pricing',
  description: 'Pricing page',
  keywords:['Pricing page', 'Duvan']
};

export default function PricingPage(){
    return (
        <>
            <span className="text-7xl">Pricing page</span> 
        </>
    );
}