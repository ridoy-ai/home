import React from 'react'

const Keyword = ({ text }) => (
    <div className="inline-block m-2 p-1 rounded-full border-2 border-green-500">
        <p className="text-xs">{text}</p>
    </div>
);

const Research = () => {
    return (
        <div name='research' className='h-120 sm:h-screen w-full text-[#0F1729]' >
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-justify'>
                <div>
                    <p className='text-2xl font-bold inline border-b-4 border-[#0f1729]'>Research Interests</p>
                    <p className='text-text-small-slate-dark py-4'>Machine Learning, Computer Vision, Semantic Recognition and Understanding, Autonomous driving. </p>
                </div>

                <div>
                    <p className='text-2xl font-bold inline border-b-4 border-[#0f1729]'>Publications</p>
                </div>
                <div className='mt-4 '>
                    <p className='text-text-small-slate-dark font-medium'>⦿ Image Forgery Detection Using CNN and Local Binary Pattern-Based Patch Descriptor </p>
                    <p className='text-text-small-slate-dark text-sm italic ml-4'>Innovations in Computational Intelligence and Computer Vision (ICICV), 2021 </p>
                    <div className='ml-2'>
                        <Keyword text="Image forgery" />
                        <Keyword text="Convolutional neural network (CNN)" />
                        <Keyword text="Local binary pattern (LBP)" />
                        <Keyword text="LBPNet" />
                    </div>
                    <div className="mt-2 ml-4">
                        <a className="underline font-bold" href="https://doi.org/10.1007/978-981-19-0475-2_38" rel="noreferrer" target="_blank">Paper ⮕</a>
                        <a className="ml-16 underline font-bold" href="https://drive.google.com/drive/folders/1gVi-nBbFuUmBC5oCod3gyk1RlB0-vGjT?usp=sharing" rel="noreferrer" target="_blank">Best Paper Award ⮕</a>
                    </div>
                </div>
                <div className="border-t-2 border-theme-dark-slate w-full my-2"></div>
                <div className='mt-4 '>
                    <p className='text-text-small-slate-dark font-medium'>⦿ Computation of Resonant Frequency and Gain from Inset Fed Rectangular Shaped Microstrip Patch Antenna Using Deep Neural Network </p>
                    <p className='text-text-small-slate-dark text-sm italic ml-4'>International Conference on Electrical Information and Communication Technology (EICT), 2019 </p>
                    <div className='ml-2'>
                        <Keyword text="Microstrip patch antenna" />
                        <Keyword text="Multilayer perceptron" />
                        <Keyword text="Root mean squared error" />
                        <Keyword text="Mean absolute percentage error" />
                    </div>
                    <div className="mt-2 ml-4">
                        <a className="underline font-bold" href="https://doi.org/10.1109/EICT48899.2019.9068758" rel="noreferrer" target="_blank">Paper ⮕</a>
                    </div>
                </div>
                <div className="border-t-2 border-theme-dark-slate w-full my-2"></div>
                <div className='mt-4 '>
                    <p className='text-text-small-slate-dark font-medium'>⦿ Design of Inset Fed Rectangular Shaped Microstrip Patch Antenna Using Deep Neural Networks </p>
                    <p className='text-text-small-slate-dark text-sm italic ml-4'>International Conference on Computer and Information Technology (ICCIT), 2019 </p>
                    <div className='ml-2'>
                        <Keyword text="Microstrip patch antenna" />
                        <Keyword text="Multilayer perceptron" />
                        <Keyword text="Root mean squared error" />
                        <Keyword text="Mean absolute error" />
                    </div>
                    <div className="mt-2 ml-4">
                        <a className="underline font-bold" href="https://doi.org/10.1109/ICCIT48885.2019.9038284" rel="noreferrer" target="_blank">Paper ⮕</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Research