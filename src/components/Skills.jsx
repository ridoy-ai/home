import React from 'react'

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-theme-dark-slate text-[#f9fafc]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid-cols-2 gap-8'>
                    <div className='sm:text-center pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#f9fafc]'>Technical Expertise</p>
                    </div>
                </div>
                <div class='max-w-[1000px] w-full gap-4 px-2 mt-4 pl-8 sm: pl-0 text-justify flex flex-col'>
                    <div class='w-full grid sm:grid-cols-2 flex flex-col gap-2 sm:gap-4 sm:flex-row sm:justify-center'>
                        <p class='font-bold text-left sm:text-right'>Area:</p>
                        <p class='text-left sm:text-left sm:block'>Machine Learning, Computer Vision, Android</p>
                    </div>
                    <div class='w-full grid sm:grid-cols-2 flex flex-col gap-2 sm:gap-4 sm:flex-row sm:justify-center'>
                        <p class='font-bold text-left sm:text-right'>Programming Languages:</p>
                        <p class='text-left sm:text-left sm:block'>Java, Python, JavaScript, Kotlin, C++, C#</p>
                    </div>
                    <div class='w-full grid sm:grid-cols-2 flex flex-col gap-2 sm:gap-4 sm:flex-row sm:justify-center'>
                        <p class='font-bold text-left sm:text-right'>Framework/API/Technologies:</p>
                        <p class='text-left sm:text-left sm:block'>Scikit-learn, TensorFlow, Keras, AWS SageMaker, AWS Rekognition, Pinecone, OpenAI API, J2SE, REST, JSON, SOAP, AIML, Google Map API, Place API, Graph API, YouTube API, Google Analytics, In-App Billing API V3, Volley, OkHttp, Retrofit, Ion, Glide, Picasso, Dagger, ButterKnife, GSON,.NET 4.0,.NET 4.5,SAPI, BlueCove, HtmlAgilityPack, React, React Native</p>
                    </div>
                    <div class='w-full grid sm:grid-cols-2 flex flex-col gap-2 sm:gap-4 sm:flex-row sm:justify-center'>
                        <p class='font-bold text-left sm:text-right'>Database:</p>
                        <p class='text-left sm:text-left sm:block'>MySQL, MS SQL Server, SQLite</p>
                    </div>
                    <div class='w-full grid sm:grid-cols-2 flex flex-col gap-2 sm:gap-4 sm:flex-row sm:justify-center'>
                        <p class='font-bold text-left sm:text-right'>Web Development:</p>
                        <p class='text-left sm:text-left sm:block'>PHP, ASP.NET 4.0, AJAX, HTML, CSS</p>
                    </div>
                    {/* <div class='flex flex-col justify-center w-full sm:w-auto'>
                        <p class='text-center text-right sm:text-left md:block'>Machine Learning, Android</p>
                        <p class='font-bold text-center sm:text-right hidden md:block'>Area:</p>
                    </div> */}
                    {/* <div class='flex flex-col w-auto sm:w-full'>
                        <p class='text-left'>Machine Learning, Android</p>
                    </div>
                    <div class='flex flex-col w-full sm:w-auto'>
                        <p class='font-bold text-right'>Programming Languages:</p>
                    </div>
                    <div class='flex flex-col w-full sm:w-auto'>
                        <p class='text-left'>Java, Python, JavaScript, C++, C#</p>
                    </div>

                    <div class='flex flex-col w-full sm:w-auto'>
                        <p class='font-bold text-right'>Framework/API/Technologies:</p>
                    </div>
                    <div class='flex flex-col w-full sm:w-auto'>
                        <p class='text-left'>Scikit-learn, TensorFlow, Keras, AWS SageMaker, AWS Rekognition, Pinecone, OpenAI API, J2SE, REST, JSON, SOAP, AIML, Google Map API, Place API, Graph API, YouTube API, Google Analytics, In-App Billing API V3, Volley, OkHttp, Retrofit, Ion, Glide, Picasso, Dagger, ButterKnife, GSON,.NET 4.0,.NET 4.5,SAPI, BlueCove, HtmlAgilityPack, React, React Native</p>
                    </div>

                    <div class='flex flex-col w-full sm:w-auto'>
                        <p class='font-bold text-right'>Database:</p>
                    </div>
                    <div class='flex flex-col w-full sm:w-auto'>
                        <p class='text-left'>MySQL , MS SQL Server, SQLite</p>
                    </div>
                    <div class='flex flex-col w-full sm:w-auto'>
                        <p class='font-bold text-right'>Web Development:</p>
                    </div>
                    <div class='flex flex-col w-full sm:w-auto'>
                        <p class='text-left'>PHP, ASP.NET 4.0, AJAX, HTML, CSS</p>
                    </div> */}
                </div>


            </div>
        </div>
    )
}

export default Skills