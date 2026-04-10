export interface BusinessItem {
  title: string;
  description: string;
  icon: string;
}

export const CORE_BUSINESS: BusinessItem[] = [
  { title: "첨단 진단 시스템 공급", description: "임상 검사 환경에 최적화된 고성능 체외진단 솔루션을 선별하여 공급하며, 병원별 맞춤형 장비 라인업을 제안합니다.", icon: "activity" },
  { title: "안정적인 의료 소모품 공급망", description: "검사의 연속성을 위해 필수 소모품을 체계적으로 관리하며, 철저한 재고 운영을 통해 적기 공급 시스템을 유지합니다.", icon: "package" },
  { title: "전문 학술 및 임상 지원", description: "장비의 정확한 운용과 검사 결과의 신뢰도를 높이기 위해 전문 인력이 상주하며, 최신 학술 정보와 실무 교육을 지원합니다.", icon: "book-open" },
  { title: "신속한 기술 서비스 및 케어", description: "전담 엔지니어가 정기 점검과 긴급 유지보수를 수행하여 장비의 공백 없는 가동을 보장하고 최상의 성능을 유지합니다.", icon: "settings" },
  { title: "스마트 물류 및 유통 최적화", description: "의료 기기 특성에 맞는 전문 물류 시스템을 구축하여, 보관부터 배송까지 전 과정에서 제품의 안전성과 신속성을 확보합니다.", icon: "truck" },
  { title: "맞춤형 도입 전략 컨설팅", description: "의료기관의 규모와 검사 수요를 분석하여, 효율적인 검사실 운영을 위한 장비 배치 및 프로세스 최적화 솔루션을 제공합니다.", icon: "clipboard-list" }
];

export const PARTNERS = [
  { name: '빌리브세웅병원' }, { name: '새통영병원' }, { name: '갑을장유병원' }, { name: '남해병원' },
  { name: '동남권원자력의학원' }, { name: '소나무병원' }, { name: '온그룹 온병원' }, { name: '큰힘병원' },
  { name: '미래병원' }, { name: '바로서면병원' }, { name: '세일병원' }, { name: '김해복음병원' }
];

export const BUSINESS_ITEMS = [
  { 
    brand: 'Roche', 
    image: '/roche.png',
    items: [
      { name: 'Cobas e411', link: 'https://diagnostics.roche.com/kr/ko/products/product-category/product-listing-temp-2.html' },
      { name: 'Cobas c503', link: 'https://diagnostics.roche.com/kr/ko/products/product-category/product-listing-temp-2.html' },
      { name: 'Cobas e801', link: 'https://diagnostics.roche.com/kr/ko/products/product-category/product-listing-temp-2.html' },
      { name: 'Cobas Pure c303', link: 'https://diagnostics.roche.com/kr/ko/products/product-category/product-listing-temp-2.html' },
      { name: 'Cobas Pure e402', link: 'https://diagnostics.roche.com/kr/ko/products/product-category/product-listing-temp-2.html' },
      { name: 'Cobas c311', link: 'https://diagnostics.roche.com/kr/ko/products/product-category/product-listing-temp-2.html' },
      { name: 'Cobas u411', link: 'https://diagnostics.roche.com/kr/ko/products/product-category/product-listing-temp-2.html' },
      { name: 'Cobas t511', link: 'https://diagnostics.roche.com/kr/ko/products/product-category/product-listing-temp-2.html' },
      { name: 'Cobas b123', link: 'https://diagnostics.roche.com/kr/ko/products/product-category/product-listing-temp-2.html' },
      { name: 'Cobas 6500', link: 'https://diagnostics.roche.com/kr/ko/products/product-category/product-listing-temp-2.html' }
    ]
  },
  { 
    brand: 'Bio Systems', 
    image: '/biosystems.png',
    items: [
      { name: 'BA400', link: 'https://biosystems.kr/customer_gallery.php' },
      { name: 'BA200', link: 'https://biosystems.kr/customer_gallery.php' },
      { name: 'A25', link: 'https://biosystems.kr/customer_gallery.php' },
      { name: 'A15', link: 'https://biosystems.kr/customer_gallery.php' }
    ]
  },
  { 
    brand: 'Werfen', 
    image: '/werfen.png',
    items: [
      { name: 'TOP 550', link: 'https://www.werfen.com' },
      { name: 'TOP 350', link: 'https://www.werfen.com' },
      { name: 'GEM 5000', link: 'https://www.werfen.com' }
    ]
  },
  { 
    brand: 'Abbott', 
    image: '/abbott.png',
    items: [
      { name: 'ALINITY', link: 'https://www.corelaboratory.abbott' },
      { name: 'ARCHITECT', link: 'https://www.corelaboratory.abbott' }
    ]
  },
  { 
    brand: 'FUJI FILM', 
    image: '/fujifilm.png',
    items: [
      { name: 'FDC NX-600', link: 'https://www.fujifilm.com' },
      { name: 'FDC NX 10NE', link: 'https://www.fujifilm.com' }
    ]
  },
  { 
    brand: 'Sysmex', 
    image: '/sysmex.png',
    items: [
      { name: 'XN-1000', link: 'https://www.sysmex.co.jp' },
      { name: 'XN-550', link: 'https://www.sysmex.co.jp' },
      { name: 'XQ-520', link: 'https://www.sysmex.co.jp' },
      { name: 'XP-300', link: 'https://www.sysmex.co.jp' },
      { name: 'XR-1000', link: 'https://www.sysmex.co.jp' },
      { name: 'CA-620', link: 'https://www.sysmex.co.jp' }
    ]
  },
  { 
    brand: '기타', 
    image: '/afias6-1.jpg',
    items: [
      { name: 'AFIAS', link: 'https://www.google.com' },
      { name: 'TOSHO (G11)', link: 'https://www.google.com' },
      { name: 'SD BIOSENSOR', link: 'https://www.google.com' },
      { name: 'BIOMERIEUX', link: 'https://www.google.com' }
    ]
  }
];
