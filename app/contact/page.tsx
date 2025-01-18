import type { Metadata } from 'next';

export const metadata : Metadata = {
  title: 'Contact',
  description: 'Contact page',
  keywords:['Contact page', 'Duvan']
};

export default function ContactPage(){
    return (
        <>
            <span className="text-7xl">Contact page</span> 
        </>
    );
}