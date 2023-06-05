import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       
        <div>
        
        </div>
      </div>

      <div className={styles.center}>
            <iframe
        src="https://ipfs-2.thirdwebcdn.com/ipfs/QmRSigvYNceevzrYV3rcmVw1rpWMY28zdmGzf9hp67vx72/erc1155.html?contract=0xe944ef9E905Fd987f0368EE0Dd03f0B1e49935F1&chain=%7B%22name%22%3A%22Goerli%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fgoerli.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Goerli+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22gor%22%2C%22chainId%22%3A5%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22goerli%22%7D&tokenId=0&theme=dark&primaryColor=purple"
        width="600px"
        height="600px"
        style={{ maxWidth: '100%' }}
        frameBorder="0"
      ></iframe>
      </div>

      <div className={styles.grid}>
     
      </div>
    </main>
  )
}
