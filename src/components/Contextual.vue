<template>
    <transition name="fade">
        <div class="contextual-container" v-show="isVisible" :style="{ left: left + 'px', top: top + 'px'}">
            <div class="contextual">
                <div class="bubble">
                    <div class="colors bubble-component">
                        <div>
                            <div v-for="col in colors" :style="{backgroundColor: col}" :key="col" @click="changeColor(col)"></div>
                        </div>
                        <div>
                            <div v-for="col in colors2" :style="{backgroundColor: col}" :key="col" @click="changeColor(col)"></div>
                        </div>
                    </div>
                    <div class="options bubble-component" @click="deleteCurrent">
                        <svg width="32px" height="32px" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd"
                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </div>
                </div>
                <div class="triangle" :style="{left: this.x - this.left - 7 + 'px'}"></div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Contextual",
        data() {
            return {
                isVisible: false,
                x: 0,
                y: 0,
                forceRecompute: 0,
                current: null,
                colors: [
                    '#000000',
                    '#FF5722',
                    '#FFB300'
                ],
                colors2: [
                    '#42b983',
                    '#b8a3ff',
                    '#3eddff'
                ]
            }
        },
        methods: {
            summonContextual(current) {
                let rect = current.$el.getBoundingClientRect();
                this.x = rect.left + rect.width / 2;
                this.y = rect.top;
                this.isVisible = true;
                this.current = current;
            },
            unSummonContextual() {
                this.isVisible = false;
            },
            deleteCurrent() {
                this.current.delete();
            },
            changeColor(col) {
                this.current.changeColor(col);
            }
        },
        computed: {
            left() {
                //manually computed bubble width because it won't update correctly when not visible
                console.log(this.x - 80, 0, window.innerWidth - 160);
                return clamp(this.x - 80, 0, window.innerWidth - 160);
            },
            top() {
                return this.y - 55 - 10;
            }
        },
        mounted() {
            this.$root.$on('summonContextual', this.summonContextual);
            this.$root.$on('unSummonContextual', this.unSummonContextual);
        }
    }
    function clamp(v, min, max) {
        return Math.max(Math.min(v, max), min);
    }
</script>

<style scoped>

    .contextual-container {
        display: inline-block;
        position: absolute;
    }

    .contextual {
        display: inline-block;
        position: relative;
    }

    .bubble {
        background-color: #323334;
        color: white;
        display: inline-block;
        padding: 3px;
        border-radius: 10px;
    }

    .triangle {
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 8px solid #323334;
        left: calc(50% - 7px);
        position: absolute;
    }

    .colors {
        display: inline-block;
        vertical-align: middle;
        border-right: 1px solid #76777B;
    }

    .colors div {
        height: 17px;
        margin: 5px 0;
    }

    .colors div div {
        width: 15px;
        height: 15px;
        border-radius: 100%;
        margin: 0 5px;
        display: inline-block;
        border: 1px solid white;
        cursor: pointer;
    }

    .options {
        display: inline-block;
        vertical-align: middle;
        height: 32px;
        cursor: pointer;

    }

    .bubble-component {
        padding: 0 10px;
    }


    .fade-enter-active {
        animation: fade-animation 0.5s;
    }
    .fade-leave-active {
        animation: fade-animation 0.3s reverse;
    }


    @keyframes fade-animation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>