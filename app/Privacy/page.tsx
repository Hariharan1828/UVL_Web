import Container from '@/components/container'
import React from 'react'


const Privacy = () => {
  return (
<Container className="flex items-center justify-center max-w-7xl mx-auto">

<div className="mb-8 lg:mt-10">
    <h1 className="text-4xl font-bold lg:font-medium font-display leading-snug tracking-tight text-sky-700 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
        Privacy Policy
    </h1>
    <div className="text-gray-600 prose-lg mt-10">
        <p className='mt-2'>
            <strong>Information We Collect:</strong>
            <br />
            <strong>Personal Identification Information:</strong> We may collect personal identification information from users when they visit our site, fill out forms, or interact with our services. Users may be asked for their name, email address, phone number, or other relevant details.
            <br />
            <strong>Non-personal Identification Information:</strong> We may collect non-personal identification information about users whenever they interact with our website. Non-personal identification information may include browser name, type of computer, and technical information about users' means of connection to our site.
        </p>
        <p className='mt-2'>
            <strong>How We Use Collected Information:</strong>
            <br />
            We collect and use personal information for the following purposes:
            <ul>
                <li>To personalize user experience.</li>
                <li>To improve our website.</li>
                <li>To send periodic emails or newsletters.</li>
            </ul>
        </p>
        <p className='mt-2'>
            <strong>How We Protect Your Information:</strong>
            <br />
            We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
        </p>
        <p className='mt-2'>
            <strong>Sharing Your Personal Information:</strong>
            <br />
            We do not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.
        </p>
        <p className='mt-2'>
            <strong>Your Acceptance of These Terms:</strong>
            <br />
            By using this site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our site.
        </p>
        <p className='mt-2'>
            <strong>Changes to This Privacy Policy:</strong>
            <br />
            UniVersaLink Solutions has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page.
        </p>
        <p className='mt-2'>
            <strong>Contacting Us:</strong>
            <br />
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at <a href="mailto:support@universalink.com" className="text-sky-700 underline">support@universalink.com</a>.
        </p>
        <p className="mt-4">
            <em>This Privacy Policy was last updated on 14th Feb 2024.</em>
        </p>
    </div>
</div>
    </Container>
  )
}

export default Privacy