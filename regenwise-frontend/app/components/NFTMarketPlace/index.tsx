import Image from 'next/image';
import styles from './index.module.scss';
import { Button } from 'react-bootstrap';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const SectionHeader = dynamic(() => import('../shared/SectionHeader'));
const HomePageLayout = dynamic(() => import('../shared/HomePageLayout'));

export default function NFTMarketPlace() {
  const router = useRouter();
  return (
    <HomePageLayout theme="light">
      <div className={styles.main_container}>
        <div className={styles.first_content}>
          <Image
            src="/scope/1a.png"
            alt="NFT Market"
            width={500}
            height={500}
          />
        </div>

        <div className={styles.second_content}>
          <SectionHeader
            title="Regen NFT Markets"
            subtitle="Explore, buy and sell meaningful NFTs from regen collections!"
          />
          <article>
            <p className="text-justify">
              The NFT marketplaces have exploded in recent years and we wanted
              to carry the idea of regen into the NFT world. The platform's NFT markets aim to amplify valuable regen endeavors:
            </p>
            <p className="flex flex-row text-justify">
              <span>
                <HiOutlineBadgeCheck fontSize={36} />
              </span>
              <span className="pl-2">
                The RegenWise (RW) NFT market, where the earned or bought NFTs
                from RegenWise Collections can be traded is a significant
                opportunity for the users of the platform.
              </span>
            </p>
            <p className="flex flex-row">
              <span>
                <HiOutlineBadgeCheck fontSize={36} />
              </span>
              <span className="pl-2 text-justify">
                Tokenized Regenerative Effort (TRE) Market (coming soon) offers
                a unique opportunity for regen enthusiasts to showcase their
                projects and be supported. After they prove the regen effort(s) that
                they have been working on, they can be tokenized via the platform and held or traded as
                NFTs. These NFTs are expected to serve as symbols of support to the crucial
                contributions to regen goal.
              </span>
            </p>
          </article>
          <div className="text-center">
            <Button
              style={{ borderRadius: '20px', padding: '0.4em 2em' }}
              variant="danger"
              onClick={() => router.push(`/nftmarket`)}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
}

