<template>
    <div class="inline-block">
        <inertia-link :href="href" class="table" :method="method || 'get'">
            <span class="btn btn-default table-cell align-middle" :class="!color || `btn-${color}`">
                <slot></slot>
            </span>
        </inertia-link>
    </div>
</template>

<script>
export default {
    props: [
        'href',
        'color',
        'method',
    ],
}
</script>