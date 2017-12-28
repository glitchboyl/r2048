import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
const limit = Dimensions
    .get('window')
    .width > 500;

export default StyleSheet.create({
    app: {
        width,
        height,
        margin: 0,
        padding: 0,
        backgroundColor: '#FAF8EF',
        // color: '#776e65',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative'
    },
    container: {
        width: limit
            ? 500
            : width,
        height: height - 40,
        marginTop: 40,
        paddingHorizontal: limit
            ? 0
            : 20,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headingTitle: {
        fontSize: 80,
        fontWeight: '700'
    },
    scoresContainer: {
        height: 55,
        display: 'flex',
        flexDirection: 'row'
    },
    scoreContainer: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 3,
        backgroundColor: '#BBADA0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative'
    },
    scoreTitle: {
        fontSize: 13,
        color: '#EEE4DA'
    },
    score: {
        marginTop: -3,
        fontSize: 25,
        fontWeight: '700',
        color: '#FFFFFF'
    },
    gameIntro: {
        fontSize: 16,
        color: '#776E65'
    },
    restartButton: {
        height: 40,
        paddingHorizontal: 15,
        borderRadius: 3,
        backgroundColor: '#8F7A66',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    restartButtonText: {
        color: '#F9F6F2',
        fontWeight: '700',
        fontSize: 15
    },
    gameContainer: {
        height: limit
            ? 500
            : width - 40,
        marginTop: 20,
        padding: limit
            ? 15
            : 10,
        borderRadius: 6,
        backgroundColor: '#BBADA0',
        position: 'relative'
    },
    gridiron: {
        top: limit
            ? 15
            : 10,
        left: limit
            ? 15
            : 10,
        zIndex: 1,
        position: 'absolute'
    },
    gridRow: {
        width: limit
            ? 470
            : width - 60,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    gridCell: {
        width: limit
            ? 106.25
            : (width - 90) / 4,
        height: limit
            ? 106.25
            : (width - 90) / 4,
        borderRadius: 3,
        backgroundColor: '#EDE3D959'
    },
    explanation: {
        marginTop: 40,
        color: '#776E65',
        fontSize: 16
    },
    fontBold: {
        fontWeight: 'bold'
    }
})