import Head from 'next/head'

const PageHead = ({ headTitle }) => {
  return (
  <>
  <Head>
    <title>
      {headTitle ? headTitle : "Petopia – Pet Care Service React Nextjs Template"}
    </title>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
	{/* New */}
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&display=swap" rel="stylesheet"/>
	<link href="https://fonts.googleapis.com/css2?family=Borel&display=swap" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap" rel="stylesheet"/>
  </Head>
  </>
  )
}

export default PageHead