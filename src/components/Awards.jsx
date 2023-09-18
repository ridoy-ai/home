import React from 'react'
import AwardItem from './AwardItem';

const awardItems = [
    {
        timePeriod: '2021',
        name: 'Best paper award',
        description: '⦿ As part of my master’s thesis publication, I presented my paper titled as “Image Forgery Detection Using CNN and Local Binary Pattern-Based Patch Descriptor” at ICICV-2021. It was awarded as one of the Best paper for the track Deep Learning.',
        values: ['International'],
        link: 'https://drive.google.com/drive/folders/1gVi-nBbFuUmBC5oCod3gyk1RlB0-vGjT?usp=sharing',
    },
    {
        timePeriod: '2021',
        name: 'Outstanding Publication Award',
        description: '⦿ Following the Best Paper award, my department CSE, congratulated and inspired me with a cash reward for my future research journey.',
        values: ['Institutional', '15000 BDT (≈$200)'],
        link: 'https://drive.google.com/drive/folders/1adBCADdmmtQa5uPtn8nuUzxqnkRGhdnW?usp=sharing',
    },
    {
        timePeriod: '2019',
        name: 'Udacity-Facebook Deep Learning Scholarship Nanodegree Program',
        description: '⦿ Accepted into the program after couple of selection rounds.',
        values: ['International', '$400/month (5 months)'],
        link: 'https://drive.google.com/file/d/19oHmXNsQUUePohHWn2cFKzEWYi_ItE0r/view?usp=sharing',
    },
    {
        timePeriod: '2017-2018',
        name: 'University masters scholarship',
        description: '⦿ Departmental scholarship based on merit position (Class rank- 1ˢᵗ).',
        values: ['Institutional', '12000 BDT/semester (≈$150)'],
    },
    {
        timePeriod: '2014',
        name: 'Best innovator award',
        description: '⦿ Participated on behalf of Khulna University and awarded as Best innovator in Digital Innovation Fair 2014, Khulna.',
        values: ['Provincial'],
    },
    {
        timePeriod: '2013',
        name: 'Best innovator award (Runner-up)',
        description: '⦿ Participated on behalf of Khulna University and awarded as 2nd Best innovator in Digital Innovation Fair 2013, Khulna.',
        values: ['Provincial'],
    },
    {
        timePeriod: '2010-2013',
        name: 'University merit scholarship',
        description: '⦿ University scholarship based on merit position (Class rank- top 10).',
        values: ['Institutional', '8000 BDT/year (≈$100)'],
    },
    {
        timePeriod: '2003-2009',
        name: 'Education board scholarship',
        description: '⦿ Govt. scholarships from primary to higher secondary education',
        values: ['National', '8000 BDT/year (≈$100)'],
        link: 'https://drive.google.com/drive/folders/1EEW44Azeg_gaDl_edqY5m4eYZmC7yHpX?usp=sharing',
    },
]
const Awards = () => {
    return (
        <div name='awards' className='w-full text-[#0F1729]' >
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-justify'>
                <div>
                    <p className='text-2xl font-bold inline border-b-4 border-[#0f1729]'>Copyright Ownership</p>
                    <p className='text-text-small-slate-dark py-4'>While doing my undergraduate thesis work in 2013, I achieved significant recognition accuracy
                        to detect handwritten bangla character patterns in real time from a canvas mobile application for
                        android devices. Afterwards, my undergrad thesis supervisor advised me to develop a complete
                        mobile calculator application where it will work based on recognizing handwritten bangla digits.
                        In 2014, with an average of 87% detection accuracy, I published the app in Playstore(<a class="underline italic font-bold" href="https://play.google.com/store/apps/details?id=com.droidcrackers.banglagonokjontro" rel="noreferrer" target="_blank">Bangla Handwritten Calculator</a>) and it
                        gained some 20K+ organic installs throughout the year. Following the success, with the
                        permission of my previous thesis supervisor, I copyrighted the software product listed as follows:
                    </p>

                    <p>⦿ Bangladesh Copyright Office, "Bangla Handwritten Calculator," September 15, 2015.
                        Available at Google Playstore:
                        https://play.google.com/store/apps/details?id=com.droidcrackers.banglagonokjontro.</p>
                </div>
                <div className='mt-6'>
                    <p className='text-2xl font-bold inline border-b-4 border-[#0f1729]'>Awards and Achievements</p>
                    <div className="mt-4">
                        {awardItems.map((item) => (
                            <AwardItem {...item} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Awards