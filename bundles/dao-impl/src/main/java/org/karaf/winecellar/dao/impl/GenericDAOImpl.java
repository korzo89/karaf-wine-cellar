package org.karaf.winecellar.dao.impl;

import org.karaf.winecellar.dao.GenericDAO;
import org.karaf.winecellar.eventbroker.impl.model.ModelPublisher;

import javax.persistence.EntityManager;
import java.util.List;

public class GenericDAOImpl<T> implements GenericDAO<T> {

    private EntityManager entityManager;
    private Class<T> type;
    private ModelPublisher modelPublisher;

    public GenericDAOImpl(Class<T> type) {
        this.type = type;
    }

    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public void setModelPublisher(ModelPublisher modelPublisher) {
        this.modelPublisher = modelPublisher;
    }

    @Override
    public List<T> getAll() {
        return DAOCommon.getAll(entityManager, type);
    }

    @Override
    public long getCount() {
        return DAOCommon.getCount(entityManager, type);
    }

    @Override
    public void removeAll() {
        DAOCommon.removeAll(entityManager, type);
    }

    @Override
    public void removeById(long id) {
        DAOCommon.removeById(entityManager, type, id);
        modelPublisher.entityDeleted(type.getName(), id);
    }

    @Override
    public T getById(long id) {
        return entityManager.find(type, id);
    }

    @Override
    public T add(T object) {
        entityManager.persist(object);
        modelPublisher.entityAdded(type.getName(), object);
        return object;
    }

    @Override
    public T update(T object) {
        entityManager.merge(object);
        modelPublisher.entityUpdated(type.getName(), object);
        return object;
    }

    protected List<T> getByField(String field, Object value) {
        return DAOCommon.getByField(entityManager, type, field, value);
    }
}