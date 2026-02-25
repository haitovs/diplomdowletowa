const fs = require('fs');
const path = require('path');

const moves = [
    { src: 'public/images/product-2.jpg', dest: 'public/images/products/product-tekke-desert-runner-1.jpg' },
    { src: 'public/images/product-3.jpg', dest: 'public/images/products/product-gersary-kilim-1.jpg' },
    { src: 'public/images/product-4.jpg', dest: 'public/images/products/product-indigo-stole-1.jpg' },
    { src: 'public/images/product-5.jpg', dest: 'public/images/products/product-oasis-throw-1.jpg' },
    { src: 'public/images/product-6.jpg', dest: 'public/images/products/product-silk-panel-1.jpg' },
    { src: 'public/images/product-7.jpg', dest: 'public/images/products/product-akar-yurt-rug-1.jpg' },
    { src: 'public/images/product-8.jpg', dest: 'public/images/products/product-desert-motif-kilim-1.jpg' },
    { src: 'public/images/product-9.jpg', dest: 'public/images/products/product-aurora-gradient-scarf-1.jpg' },
    { src: 'public/images/product-10.jpg', dest: 'public/images/products/product-ruby-gallery-carpet-1.jpg' },
    { src: 'public/images/yomut.jpg', dest: 'public/images/products/product-yomut-gol-carpet-1.jpg' },
    { src: 'public/images/ersari.jpg', dest: 'public/images/products/product-ersari-elephant-rug-1.jpg' },
    { src: 'public/images/cat-acc.jpg', dest: 'public/images/products/product-golden-oasis-scarf-1.jpg' },
    { src: 'public/images/artisan-3.jpg', dest: 'public/images/products/product-embroidery-vest-1.jpg' },
    { src: 'public/images/heritage-1.jpg', dest: 'public/images/products/product-camel-bag-1.jpg' },
    { src: 'public/images/tekke.jpg', dest: 'public/images/products/product-camel-trapping-1.jpg' },
    { src: 'public/images/heritage-2.jpg', dest: 'public/images/products/product-khorjun-bag-1.jpg' },
    { src: 'public/images/cat-silk.jpg', dest: 'public/images/products/product-silk-ikat-pillow-1.jpg' },
    { src: 'public/images/featured-1.jpg', dest: 'public/images/products/product-teke-chuval-1.jpg' },
    { src: 'public/images/featured-3.jpg', dest: 'public/images/products/product-bukhara-runner-1.jpg' },
    { src: 'public/images/featured-2.jpg', dest: 'public/images/products/product-caspian-shawl-1.jpg' },
    { src: 'public/images/process-2.jpg', dest: 'public/images/products/product-sunset-keteni-1.jpg' }
];

moves.forEach(move => {
    const srcPath = path.join(process.cwd(), move.src);
    const destPath = path.join(process.cwd(), move.dest);

    try {
        if (fs.existsSync(srcPath)) {
            fs.renameSync(srcPath, destPath);
            console.log(`✅ Moved ${move.src} -> ${move.dest}`);
        } else {
            console.log(`⚠️ Source not found: ${move.src}`);
        }
    } catch (err) {
        console.error(`❌ Failed to move ${move.src}: ${err.message}`);
    }
});
