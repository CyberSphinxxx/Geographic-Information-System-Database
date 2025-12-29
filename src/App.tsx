import { useState } from 'react';
import { Catalog } from '@/components';
import { About, LearnGis } from '@/pages';

type Page = 'catalog' | 'about' | 'learn';

function App() {
    const [currentPage, setCurrentPage] = useState<Page>('catalog');

    return (
        <main className="min-h-screen bg-white dark:bg-slate-900">
            {currentPage === 'catalog' && (
                <Catalog onNavigate={(page) => setCurrentPage(page as Page)} />
            )}
            {currentPage === 'about' && (
                <About onNavigate={(page) => setCurrentPage(page as Page)} />
            )}
            {currentPage === 'learn' && (
                <LearnGis onNavigate={(page) => setCurrentPage(page as Page)} />
            )}
        </main>
    );
}

export default App;
