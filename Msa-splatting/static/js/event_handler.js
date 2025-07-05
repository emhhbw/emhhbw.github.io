document.addEventListener('DOMContentLoaded', domReady);

        function domReady() {
            new Dics({
                container: document.querySelectorAll('.b-dics')[0],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[1],
                hideTexts: false,
                textPosition: "bottom"

            });
        }



        function objectSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 4
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'resources/360image1/room_0';
                        break;
                    case 1:
                        image.src = 'resources/360image1/counter_1';
                        break;
                    case 2:
                        image.src = 'resources/360image1/kitchen_2';
                        break;
                    case 3:
                        image.src = 'resources/360image1/bonsai_3';
                        break;
                    case 4:
                        image.src = 'resources/360image1/bicycle_4';
                        break;
                    case 5:
                        image.src = 'resources/360image1/flowers_5';
                        break;
                    case 6:
                        image.src = 'resources/360image1/garden_6';
                        break;
                    case 7:
                        image.src = 'resources/360image1/stump_7';
                        break;
                    case 8:
                        image.src = 'resources/360image1/treehill_8';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '_gs.png';
                        break;
                    case 1:
                        image.src = image.src + '_mip.png';
                        break;
                    case 2:
                        image.src = image.src + '_ours.png';
                        break;
                    case 3:
                        image.src = image.src + '_gt.png';
                        break;

                }
            }

            let scene_list = document.getElementById("object-scale-recon").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function ablation3DEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 4
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'resources/360image2/room_0_gs.png';
                        break;

                }
                switch (i) {
                    case 0:
                        image.src = image.src + '_gs.jpg';
                        break;
                    case 1:
                        image.src = image.src + '_mip.jpg';
                        break;
                    case 2:
                        image.src = image.src + '_ours.jpg';
                        break;
                    case 3:
                        image.src = image.src + '_gt.jpg';
                        break;
                }
            }

            let scene_list = document.getElementById("ablation-3d-filter").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }