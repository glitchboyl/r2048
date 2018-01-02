import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
const limit = width > 500;

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
        marginTop: limit
            ? 40
            : 20,
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
        fontSize: limit
            ? 80
            : 50,
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
        width: limit
            ? 300
            : width * .6,
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
        marginTop: limit
            ? 20
            : 15,
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
    tileContainer: {
        top: limit
            ? 15
            : 10,
        left: limit
            ? 15
            : 10,
        width: limit
            ? 470
            : width - 60,
        height: limit
            ? 470
            : width - 60,
        zIndex: 2,
        position: 'absolute'
    },
    tile: {
        width: limit
            ? 106.25
            : (width - 90) / 4,
        height: limit
            ? 106.25
            : (width - 90) / 4,
        borderRadius: 3,
        zIndex: 10,
        position: 'absolute'
    },
    'tile-2': {
        backgroundColor: '#EEE4DA'
    },
    'tile-4': {
        backgroundColor: '#EDE0C8'
    },
    'tile-8': {
        color: '#F9F6F2',
        backgroundColor: '#F2B179'
    },
    'tile-16': {
        color: '#F9F6F2',
        backgroundColor: '#F59563'
    },
    'tile-32': {
        color: '#F9F6F2',
        backgroundColor: '#F67C5F'
    },
    'tile-64': {
        color: '#F9F6F2',
        backgroundColor: '#F65E3B'
    },
    'tile-128': {
        color: '#F9F6F2',
        backgroundColor: '#EDCF72',
        fontSize: limit
            ? 45
            : 25
    },
    'tile-256': {
        color: '#F9F6F2',
        backgroundColor: '#EDCC61',
        fontSize: limit
            ? 45
            : 25
    },
    'tile-512': {
        color: '#F9F6F2',
        backgroundColor: '#EDC850',
        fontSize: limit
            ? 45
            : 25
    },
    'tile-1024': {
        color: '#F9F6F2',
        backgroundColor: '#EDC53F',
        fontSize: limit
            ? 35
            : 20
    },
    'tile-2048': {
        color: '#F9F6F2',
        backgroundColor: '#EDC22E',
        fontSize: limit
            ? 35
            : 20
    },
    tileInner: {
        width: limit
            ? 106.25
            : (width - 90) / 4,
        height: limit
            ? 106.25
            : (width - 90) / 4,
        borderRadius: 3,
        fontSize: limit
            ? 55
            : 35,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        zIndex: 10
    },
    explanation: {
        marginTop: limit
            ? 40
            : 15,
        color: '#776E65',
        fontSize: 16
    },
    fontBold: {
        fontWeight: 'bold'
    }
})