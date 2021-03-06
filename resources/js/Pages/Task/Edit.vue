<template>
    <layout>
        <template slot="breadcrumbs">
            <breadcrumbs
                :breadcrumbs="[
                    {title: 'Home',         url: route('home')},
                    {title: 'Tasks',        url: route('task.index')},
                    {title: (isCreateForm ? 'Create' : 'Edit') + ' Task'},
                ]"
            ></breadcrumbs>
        </template>
        <template slot="title"> Edit Task </template>
        <form @submit.prevent="submit" class="mt-2">
            <div class="form-group">
                <label for="name"> Task Name </label>
                <input type="text" name="name" class="form-control" placeholder="Enter task name" v-model="form.name" required/>
            </div>

            <div class="form-group">
                <label for="description"> Description </label>
                <textarea name="description" class="form-control" placeholder="Describe this task" v-model="form.description"></textarea>
            </div>

            <div class="form-group">
                <label for="project_id"> Project </label>
                <multi-select :options="projects" label="name" v-model="selectedProject"></multi-select>
            </div>

            <div class="form-group">
                <label for="parent_id"> Parent Task </label>
                <multi-select :options="selectableParentTasks" label="name" v-model="selectedParentTask"></multi-select>
            </div>
            <div class="flex mt-4">
                <div class="flex-1 mt-2">
                    <button-link :href="route('task.index')"> Cancel </button-link>
                </div>
                <div class="flex-1 float-right">
                    <button class="btn btn-blue float-right"> {{ isCreateForm ? 'Create' : 'Update' }} </button>
                </div>
            </div>
        </form>
    </layout>
</template>

<script>
    import multiSelect from 'vue-multiselect';
    import breadcrumbs from '@/Shared/Breadcrumbs';
    import layout from '@/Shared/Layout';
    import projectSelect from '@/Shared/ProjectSelect';

    export default {
        props: [
            'projects',
            'task',
            'tasks',
        ],
        data() {
            return {
                selectedProject: (this.task && this.task.project_id) ? this.projects.find(p => p.id == this.task.project_id) : null,
                selectedParentTask: (this.task && this.task.parent_id) ? this.tasks.find(t => t.id == this.task.parent_id) : null,
                form: this.task || {},
            }
        },
        components: {
            multiSelect: multiSelect,
            breadcrumbs: breadcrumbs,
            layout: layout,
            projectSelect: projectSelect,
        },
        methods: {
            submit() {
                this.$inertia[this.isCreateForm ? 'post' : 'patch'](
                    this.isCreateForm ? route('task.store') : route('task.update', this.task.id),
                    {
                        ...this.form,
                        ...{
                            project_id: this.selectedProjectId,
                            parent_id: this.selectedParentTaskId,
                        }
                    }
                );
            }
        },
        computed: {
            isCreateForm() {
                return this.task == null;
            },
            selectedProjectId() {
                return this.selectedProject ? this.selectedProject.id : null;
            },
            selectedParentTaskId() {
                return this.selectedParentTask ? this.selectedParentTask.id : null;
            },
            selectableParentTasks() {
                var _this = this;

                return this.selectedProject ? this.tasks.filter(function (task) {
                    return task.project_id === _this.selectedProjectId;
                }) : this.tasks;
            }
        }
    }
</script>