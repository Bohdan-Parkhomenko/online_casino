import img1 from './assets/imf12.png'
import img2 from './assets/ya-lun-.jpg'
import img3 from './assets/ya-lun- (1).jpg'
import img4 from './assets/ya-lun- (2).jpg'
import img5 from './assets/ya-lun- (3).jpg'

export const CarouselItem = [
    {
        image: img1,
        title: 'win together!',
        description: 'Invite your friends and get a megabonus',
        coins: '500 coins',
        buttons: [
            { label: 'registration', className: 'baton-primary-field' },
            { label: 'details', className: 'baton-primary' }
        ]
    },

    {
        image: img2,
        title: 'Slide 2',
        description: 'Description for Slide 2',
        coins: '200 coins',
        buttons: [
            { label: 'button 1', className: 'button-class-1' },
            { label: 'button 2', className: 'button-class-2' }
        ]
    },
    {
        image: img3,
        title: 'Slide 3',
        description: 'Description for Slide 3',
        coins: '300 coins',
        buttons: [
            { label: 'button 1', className: 'button-class-1' },
            { label: 'button 2', className: 'button-class-2' }
        ]
    },
    {
        image: img4,
        title: 'Slide 4',
        description: 'Description for Slide 3',
        coins: '200 coins',
        buttons: [
            { label: 'button 1', className: 'button-class-1' },
            { label: 'button 2', className: 'button-class-2' }
        ]
    },
    {
        image: img5,
        title: 'Slide 5',
        description: 'Description for Slide 3',
        coins: '100 coins',
        buttons: [
            { label: 'button 1', className: 'button-class-1' },
            { label: 'button 2', className: 'button-class-2' }
        ]
    },

    // Додайте інші елементи контейнера за потреби
];