/**
 * 상품 컨텐츠
 */
module.exports = (sequelize, Sequelize) => {
    const ProductContents = sequelize.define("productContents", {
        product_id: {
            type: Sequelize.INTEGER,      // 팔고싶다면 상품 아이디
        },
        role: {
            type: Sequelize.STRING       // add: 추가상품(최대 10개), main: 기본상품(최대 5개)
        },
        name: {
            type: Sequelize.STRING       // 상품명
        },
        price: {
            type: Sequelize.STRING        // 가격
        },
        created: {
            type: Sequelize.DATE,
        },
        deleted: {
            type: Sequelize.DATE,
        },
        updated: {
            type: Sequelize.DATE,
        }
    }, {
        timestamps: false,
        underscored: true,
    });
    return ProductContents;
};