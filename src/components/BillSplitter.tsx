import React from 'react'
import ShopItem from '../@types/ShopItemInterface'
import BillScrollList from './BillScrollList'

type Props = {}

export default function BillSplitter({}: Props) {

    
    const [file, setFile] = React.useState()

    const [xmlString, setXmlString] = React.useState('')

    const [shopList, setShopList] = React.useState<Array<ShopItem> | null>(null)

    
    const fileReader = new FileReader

    fileReader.onload = (e) => {
        console.log(e)
        if(typeof e.target?.result === 'string'){
            setXmlString(e.target?.result)
            console.log(e.target?.result)
        }
    }

    const parser = new DOMParser();
    
    
    let xmlDoc = parser.parseFromString( xmlString || "", "text/xml");

    console.log(typeof xmlDoc);
    console.log(xmlDoc);

    React.useEffect(() => {

        let xmlDoc = parser.parseFromString( xmlString || "", "text/xml");

        console.log(typeof xmlDoc);
        console.log(xmlDoc);

        if(xmlDoc){
            var HOLDERShopList = []
            let shopItems = xmlDoc.getElementsByTagName('det')
    
            for (let index = 0; index < shopItems.length; index++) {
                let item : ShopItem = {
                    name: shopItems[index].getElementsByTagName('xProd')[0].textContent,
                    unitsBuyed: Number(shopItems[index].getElementsByTagName('qCom')[0].textContent),
                    uniPrice: Number(shopItems[index].getElementsByTagName('vUnCom')[0].textContent),
                    totalPrice: Number(shopItems[index].getElementsByTagName('vProd')[0].textContent),
                }
                HOLDERShopList.push(item)
                
            }
    
            console.log(HOLDERShopList)
            setShopList(HOLDERShopList)
        }
    


    },[xmlString])

    
    

    

    const teste = () => {
        console.log(file)
        if(!file) return
        fileReader.readAsText(file);
    }

    const handleFile = (e : any) => {
        
        setFile(e.target.files[0])
    }


  return (
    <div>
        <input type='file' onChange={ (e) => {handleFile(e)}} onSubmit={(e) => {handleFile(e)}} accept=".xml"/>
        <button onClick={teste}>Enviar</button>
        {shopList && <BillScrollList shopList={shopList} />}
    </div>
  )
}