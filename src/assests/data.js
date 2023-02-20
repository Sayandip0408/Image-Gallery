const sikkimData = [
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887369/MyGallery/IMG_20221106_174639_xzkwdi.jpg", name: "Gangtok Mall Road I", alt: "alt 1" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887501/MyGallery/IMG_20221107_094115_rn5yps.jpg", name: "Seven Sister Waterfall", alt: "alt 2" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887361/MyGallery/IMG_20221106_175630_w8glxn.jpg", name: "Gangtok Mall Road II", alt: "alt 3" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887634/MyGallery/IMG_20221107_134109_dfelih.jpg", name: "Amazing View Point", alt: "alt 4" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887373/MyGallery/IMG_20221106_174625_z82tyk.jpg", name: "Gangtok Mall Road III", alt: "alt 5" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887706/MyGallery/IMG_20221108_090531_w7qu7f.jpg", name: "Kala Patthar I", alt: "alt 6" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887697/MyGallery/IMG_20221108_093455_yh1snm.jpg", name: "Kala Patthar II", alt: "alt 7" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887709/MyGallery/IMG_20221107_194731_ht0tzw.jpg", name: "Lachen Homestay", alt: "alt 8" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887711/MyGallery/IMG_20221109_084704_opz5dj.jpg", name: "Zero Point", alt: "alt 9" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887371/MyGallery/IMG_20221106_173555_n7uxfo.jpg", name: "Gangtok Mall Road IV", alt: "alt 10" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887710/MyGallery/IMG_20221107_154105_spdt1g.jpg", name: "Teesta View Point", alt: "alt 11" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887712/MyGallery/IMG_20221108_093513_s6vfdr.jpg", name: "Kala Patthar II", alt: "alt 12" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887712/MyGallery/IMG_20221109_102740_mnuug3.jpg", name: "Yumthang Valley", alt: "alt 13" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887713/MyGallery/IMG_20221107_162007_1_bpxjwf.jpg", name: "Teesta River", alt: "alt 14" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887728/MyGallery/IMG_20221109_141144_oqnyjg.jpg", name: "Eye Pleasing View I", alt: "alt 15" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887729/MyGallery/IMG_20221110_115332_jmeghj.jpg", name: "Chaangu Lake", alt: "alt 16" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676887730/MyGallery/IMG_20221109_142118_ff7cpj.jpg", name: "Eye Pleasing View II", alt: "alt 17" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676888168/MyGallery/IMG_20221111_183239_1_ssl2ts.jpg", name: "Gangtok City Lights", alt: "alt 18" }
]

const darjeelingData = [
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892535/MyGallery/IMG_20211118_111729_mz9w3e.jpg", name: "Kanchanjangha I", alt: "alt 1" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892521/MyGallery/IMG_20211114_162243_e0dwl4.jpg", name: "British Golf Course", alt: "alt 2" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892522/MyGallery/IMG_20211116_080052_mlroa0.jpg", name: "Delo Mountain", alt: "alt 3" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892524/MyGallery/IMG_20211114_180309_e4azm5.jpg", name: "Kalimpong City Lights", alt: "alt 4" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892524/MyGallery/IMG_20211115_162532_pv7hsp.jpg", name: "Morning View", alt: "alt 5" },

    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892525/MyGallery/IMG_20211116_180835_rc5apq.jpg", name: "Darjeeling Mall Road I", alt: "alt 1" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892526/MyGallery/IMG_20211116_180752_vfexup.jpg", name: "Darjeeling Mall Road II", alt: "alt 2" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892528/MyGallery/IMG_20211116_180806_leam6r.jpg", name: "Darjeeling Mall Road III", alt: "alt 3" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892530/MyGallery/IMG_20211116_104223_i6noft.jpg", name: "Triveni View Point", alt: "alt 4" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892527/MyGallery/IMG_20211117_063628_jwkqxk.jpg", name: "Sunrise from Tiger Hill", alt: "alt 5" },

    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892532/MyGallery/IMG_20211117_071649_lsglfp.jpg", name: "Ghum Monastery", alt: "alt 1" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892531/MyGallery/IMG_20211117_114959_dgmilg.jpg", name: "Mahakal Temple", alt: "alt 2" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892532/MyGallery/IMG_20211116_180840_emdvkd.jpg", name: "Darjeeling Mall Road IV", alt: "alt 3" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892532/MyGallery/IMG_20211118_090450_hjdkyf.jpg", name: "Kanchanjangha II", alt: "alt 4" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892535/MyGallery/IMG_20211118_163424_pav4p0.jpg", name: "Mirik", alt: "alt 5" },
]

const localData = [
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892440/MyGallery/1604236216275_hyvk1j.jpg", name: "Boropukur, Tribeni", alt: "alt 1" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892441/MyGallery/1610893734242_fhnvcn.jpg", name: "Hangseshwari Mandir I", alt: "alt 2" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892441/MyGallery/1604236216278_opldzn.jpg", name: "Demra, Mogra", alt: "alt 3" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892443/MyGallery/00000IMG_00000_BURST20201101162308064_COVER_1_xa02u1.jpg", name: "Township, Tribeni", alt: "alt 4" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892444/MyGallery/1610894264841_h38umg.jpg", name: "Hangseshwari Mandir II", alt: "alt 5" },

    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892444/MyGallery/1610894121024_mijdbx.jpg", name: "Hangseshwari Mandir III", alt: "alt 1" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892441/MyGallery/1604236216270_x15vxx.jpg", name: "Boropukur, Tribeni", alt: "alt 2" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892445/MyGallery/1610893804528_el7diz.jpg", name: "Hangseshwari Mandir IV", alt: "alt 3" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892446/MyGallery/1613919462787_ntrtpv.jpg", name: "Hangseshwari Mandir V", alt: "alt 4" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892448/MyGallery/IMG_20171227_153731_cg7mwd.jpg", name: "Victoria Memorial", alt: "alt 5" },

    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892448/MyGallery/1672217207143_kdsilx.jpg", name: "ISKCON Mayapur", alt: "alt 1" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892448/MyGallery/IMG_20210613_191741_i8rnbz.jpg", name: "Eco Park", alt: "alt 2" },
    { image: "https://res.cloudinary.com/dgb69w56a/image/upload/v1676892453/MyGallery/1610894046349_mfpngu.jpg", name: "Hangseshwari Mandir VI", alt: "alt 3" },
]

export { sikkimData, darjeelingData, localData };