import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline';
import Image from 'next/image'
import HeaderItem from './HeaderItem'

function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center h-auto m-5">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="Home" Icon={HomeIcon} />
                <HeaderItem title="Trending" Icon={LightningBoltIcon} />
                <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
                <HeaderItem title="Collections" Icon={CollectionIcon} />
                <HeaderItem title="Search" Icon={SearchIcon} />
                <HeaderItem title="Account" Icon={UserIcon} />
            </div>
            <Image className="object-contain" src="/images/hulu-white.png" width={200} height={100} />
        </header>
    )
}

export default Header
