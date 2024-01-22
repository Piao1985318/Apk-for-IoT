/**
 * 댓글 리스트를 Tree구조화하기
 */
module.exports = function generateCommitTree( data ) {
    let list = data;
    if ( data.length === 0 )
        return {
            status: false,
            results: [],
        };

    while ( list[ 0 ].level !== 1 ) {
        let temp = list[ 0 ]['dataValues'].parent_id;
        let buf = temp.split('.');
        let parent_temp = "";

        for ( let i = 0; i < buf.length - 1; i ++ ) {
            parent_temp += buf[ i ];
            if ( i !== buf.length - 2 )
                parent_temp += "."
        }

        for ( let i = 1; i < list.length; i ++ ) {
            if ( list[ i ].parent_id === parent_temp ) {
                if ( !list[ i ]['dataValues'].children ) {
                    list[ i ]['dataValues'] = Object.assign( {}, list[ i ]['dataValues'], { children: [list[ 0 ]] });
                } else {
                    let children = list[ i ]['dataValues'].children;
                    children.push( list[ 0 ] );
                    children.sort( (a, b) => {
                        return b.created - a.created;
                    });
                    list[ i ]['dataValues'].children = children;
                }
                break;
            }
        }
        list.shift();
    }

    list.sort( (a, b ) => { return b.created - a.created } );
    return {
        status: true,
        results: list,
    };
};